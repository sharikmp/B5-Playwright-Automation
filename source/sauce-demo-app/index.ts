import { test as base, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { InventoryPage } from './pages/inventory-page';
import { CartPage } from './pages/cart-page';
import { CheckoutPage } from './pages/checkout-page';

type Pages = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
}

export const test = base.extend<Pages>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({page}, use) => {
        await use(new InventoryPage(page));
    },
    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },
    checkoutPage: async ({page}, use) => {
        const pageObject = new CheckoutPage(page);
        await use(pageObject);
    },
});