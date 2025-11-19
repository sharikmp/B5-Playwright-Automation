import { test, expect } from '@playwright/test';

const tags = [
    "@smoke",   // Suite - smoke/regression/sanity
    "@ui",      // test type - ui/api/db   
    "@iframe"   // Feature - alerts/notifications/messaging
];

test.beforeAll(async () => {
    // Runs once before all tests in the file
    console.log("Starting iframe tests...");
});

test.afterAll(async () => {
    // Runs once after all tests in the file
    console.log("Completed iframe tests.");
});

test.beforeEach(async ({page}) => {
    const url = "https://sharikmp.github.io/learn.automation/iframes.html";
    await page.goto(url);
});

test.only('UI interaction - iframe', { tag: tags }, async ({ page }) => {//remove only
    const policyDetailsIframe = page.frameLocator('#policy-details-iframe');

    await policyDetailsIframe.locator("#policy-type").selectOption({label: "Home Insurance"});
    await policyDetailsIframe.getByPlaceholder("John Doe").fill("Sharik M.");
    await policyDetailsIframe.locator("#email").fill("test-user@dummyclaim.com");
    await policyDetailsIframe.locator("#get-quote-button").click();

    const quoteIframe = policyDetailsIframe.frameLocator("#quote-iframe");

    expect(quoteIframe.locator("#quote-value")).toHaveText("$450.00 / month");
    await quoteIframe.locator("#confirm-quote-button").click();

    // ToDo - Mariya: Payment Iframe on Quote Iframe


    await page.pause();// Remove

});