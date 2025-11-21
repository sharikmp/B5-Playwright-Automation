import { test, expect } from '@playwright/test';

const tags = [
    "@smoke",   // Suite - smoke/regression/sanity
    "@ui",      // test type - ui/api/db   
    "@alerts"   // Feature - alerts/notifications/messaging
];

test.describe("UI interaction - alerts", { tag: tags }, () => {

    test.beforeEach(async ({ page }) => {
        const url = "https://sharikmp.github.io/learn.automation/alerts-cookies.html";
        await page.goto(url);
    });

    test('Verify alert is accepted', async ({ page }) => {

        page.once('dialog', (dialog) => {
            const alertMsg = dialog.message();
            expect(alertMsg).toBe("This is a browser alert!");
            dialog.accept();
        });

        // Steps
        await page.getByText("Show Alert").click();

    });



    test('Verify alert is dismiss/cancel', async ({ page }) => {

        page.once('dialog', (dialog) => {
            const alertMsg = dialog.message();
            expect(alertMsg).toBe("Do you confirm this action?");
            dialog.dismiss();
        });

        // Steps
        await page.getByText("Show Confirm").click();

    });



    test('Verify prompt is answered', {tag: ["@prompt"]}, async ({ page }) => {
        page.once('dialog', (dialog) => {
            const alertMsg = dialog.message();
            expect(alertMsg).toBe("Enter your name:");
            dialog.accept("Sharik");
        });

        // Steps
        await page.getByText("Enter Your Name").click();
    });

});

// Cancel - via dialog.dismiss();