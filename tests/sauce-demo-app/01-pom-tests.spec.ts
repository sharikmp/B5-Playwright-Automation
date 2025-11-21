import { test, expect } from '@playwright/test';
import { LoginPage } from '../../source/sauce-demo-app/pages/login-page';
import { InventoryPage } from '../../source/sauce-demo-app/pages/inventory-page';
import { CartPage } from '../../source/sauce-demo-app/pages/cart-page';
import { CheckoutPage } from '../../source/sauce-demo-app/pages/checkout-page';

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

test('Verify e2e ordering', async ({ page }) => {
    // Login page
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    // Inventory page
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await page.locator("#add-to-cart-sauce-labs-bike-light").click();
    expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText("2");
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Cart Page
    await page.locator('button[name="checkout"]').click();

    // Check out page
    await page.locator('#first-name').fill("John");
    await page.locator('#last-name').fill("Doe");
    await page.locator('#postal-code').fill("12345");

    await page.locator('#continue').click();
    await page.locator('#finish').click();

    const successMessage = await page.locator('[data-test="complete-header"]').textContent();
    expect(successMessage).toBe("Thank you for your order!!");

});


test('Verify successful login - using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.performLogin("standard_user", "secret_sauce");
});


test('Verify invalid login - using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.performLogin("standard_user1", "secret_sauce1");
    expect(await loginPage.getError()).toBe("Epic sadface: Username and password do not match any user in this service");
});


test('Verify locked user login - using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.performLogin("locked_out_user", "secret_sauce");
    expect(await loginPage.getError()).toBe("Epic sadface: Sorry, this user has been locked out.");
});


test.only('Verify cart count with 2 items - using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.performLogin("standard_user", "secret_sauce");
    await inventoryPage.addToCartItem("Sauce Labs Fleece Jacket");
    await inventoryPage.addToCartItem("Sauce Labs Bike Light");
    expect(await inventoryPage.getCartItemCount()).toBe(2);

});


test.only('Verify cart count with 3 items - using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.performLogin("standard_user", "secret_sauce");
    await inventoryPage.addToCartItem("Sauce Labs Fleece Jacket");
    await inventoryPage.addToCartItem("Sauce Labs Onesie");
    await inventoryPage.addToCartItem("Sauce Labs Bike Light");
    expect(await inventoryPage.getCartItemCount()).toBe(3);

});


test.only('Verify e2e ordering - using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.performLogin("standard_user", "secret_sauce");
    await inventoryPage.addToCartItem("Sauce Labs Fleece Jacket");
    await inventoryPage.addToCartItem("Sauce Labs Onesie");
    await inventoryPage.addToCartItem("Sauce Labs Bike Light");
    expect(await inventoryPage.getCartItemCount()).toBe(3);

    await inventoryPage.clickCartIcon();

    await cartPage.clickCheckoutButton();

    await checkoutPage.fillCheckoutInfo("John", "Doe", "12345");
    await checkoutPage.clickContinueButton();
    await checkoutPage.clickFinishButton();

    expect( await checkoutPage.getOrderMessage() ).toBe("Thank you for your order!");

});