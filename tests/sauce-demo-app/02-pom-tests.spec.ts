import { expect } from '@playwright/test';
import { test } from '../../source/sauce-demo-app/index';
import { testdata } from '../../source/sauce-demo-app/data/test-data';


test.only('Verify e2e ordering - using POM', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {

    await loginPage.performLogin(testdata.validUser.username, testdata.validUser.password);
    await inventoryPage.addToCartItem(testdata.items.item1);
    await inventoryPage.addToCartItem(testdata.items.item2);
    await inventoryPage.addToCartItem(testdata.items.item3);
    expect(await inventoryPage.getCartItemCount()).toBe(3);
    await inventoryPage.clickCartIcon();
    await cartPage.clickCheckoutButton();
    await checkoutPage.fillCheckoutInfo(testdata.checkoutInfo.firstName, testdata.checkoutInfo.lastName, testdata.checkoutInfo.postalCode);
    await checkoutPage.clickContinueButton();
    await checkoutPage.clickFinishButton();
    expect( await checkoutPage.getOrderMessage() ).toBe(testdata.orderMessage.successMessage);

});