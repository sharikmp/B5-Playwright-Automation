import {Page} from "@playwright/test";

export class InventoryPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;   
    }

    private locators = {
        addToCartItemButton: (itemName: string) => `//*[text()="${itemName}"]//ancestor::div[@class="inventory_item"]//button`,
        cartCountText: '[data-test="shopping-cart-badge"]',
        cartIcon: '[data-test="shopping-cart-link"]',
    }

    async addToCartItem(itemName: string) {
        await this.page.locator(this.locators.addToCartItemButton(itemName)).click();
    }

    async getCartItemCount() {
        return Number(await this.page.locator(this.locators.cartCountText).textContent());
    }

    async clickCartIcon() {
        await this.page.locator(this.locators.cartIcon).click();
    }

}