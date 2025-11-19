import { test, expect } from '@playwright/test';
import { LoginPage } from '../../source/sauce-demo-app/pages/login-page';

const tags = [
    "@smoke",       // Suite - smoke/regression/sanity
    "@ui",          // test type - ui/api/db   
    "@saucedemo",   // Application name
    "@login",       // Feature - alerts/notifications/messaging
];

test.beforeAll(async () => {
    console.log("Starting sauce demo tests...");
});

test.afterAll(async () => {
    console.log("Completed sauce demo tests.");
});

test.beforeEach(async ({page}) => {
    const url = "https://www.saucedemo.com/";
    await page.goto(url);
});

test('Verify successful login', async ({ page }) => {

    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await page.locator("#add-to-cart-sauce-labs-bike-light").click();

    expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText("2");

    await page.locator('[data-test="shopping-cart-link"]').click();

    await page.locator('button[name="checkout"]').click();

    await page.pause();

});


test('Verify successful login - using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.performLogin("standard_user", "secret_sauce");
});


test.only('Verify invalid login - using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.performLogin("standard_user1", "secret_sauce1");
    expect(await loginPage.getError()).toBe("Epic sadface: Username and password do not match any user in this service");
});


test.only('Verify locked user login - using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.performLogin("locked_out_user", "secret_sauce");
    expect(await loginPage.getError()).toBe("Epic sadface: Sorry, this user has been locked out.");
});