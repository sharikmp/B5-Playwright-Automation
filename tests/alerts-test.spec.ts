import { test, expect } from '@playwright/test';

const tags = [
    "@smoke",   // Suite - smoke/regression/sanity
    "@ui",      // test type - ui/api/db   
    "@alerts"   // Feature - alerts/notifications/messaging
];

test('UI interaction - alerts - accepted', { tag: tags }, async ({ page }) => {
    const url = "https://sharikmp.github.io/learn.automation/alerts-cookies.html";

    page.once('dialog', (dialog) => {
        const alertMsg = dialog.message();
        expect(alertMsg).toBe("This is a browser alert!");
        dialog.accept();
    });


    // Steps
    await page.goto(url);
    await page.getByText("Show Alert").click();

});



test('UI interaction - alerts - dismiss/cancel', { tag: tags }, async ({ page }) => {
    const url = "https://sharikmp.github.io/learn.automation/alerts-cookies.html";

    page.once('dialog', (dialog) => {
        const alertMsg = dialog.message();
        expect(alertMsg).toBe("Do you confirm this action?");
        dialog.dismiss();
    });


    // Steps
    await page.goto(url);
    await page.getByText("Show Confirm").click();

});



test('UI interaction - alerts - prompt', { tag: tags }, async ({ page }) => {
    const url = "https://sharikmp.github.io/learn.automation/alerts-cookies.html";

    page.once('dialog', (dialog) => {
        const alertMsg = dialog.message();
        expect(alertMsg).toBe("Enter your name:");
        dialog.accept("Sharik");
    });


    // Steps
    await page.goto(url);
    await page.getByText("Enter Your Name").click();

});


// Cancel - via dialog.dismiss();