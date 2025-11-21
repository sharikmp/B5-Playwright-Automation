import {Page} from "@playwright/test";

export class CartPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;   
    }

    private locators = {
        checkoutButton: 'button[name="checkout"]',
    }

    async clickCheckoutButton() {
        await this.page.locator(this.locators.checkoutButton).click();
    }
}