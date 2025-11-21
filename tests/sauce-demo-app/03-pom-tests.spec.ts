// To do - Mariya: Replace all hardcoded data with POM and test data file usage

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