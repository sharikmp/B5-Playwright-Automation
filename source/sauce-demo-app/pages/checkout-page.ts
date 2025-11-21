import {Page} from "@playwright/test";

export class CheckoutPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;   
    }

    private locators = {
        firstNameInput: '#first-name',
        lastNameInput: '#last-name',
        postalCodeInput: '#postal-code',
        continueButton: '#continue',
        finishButton: '#finish',
        orderMessageText: '[data-test="complete-header"]',
    }

    async fillCheckoutInfo(fname: string, lname: string, postalCode: string) {
        await this.page.locator(this.locators.firstNameInput).fill(fname);
        await this.page.locator(this.locators.lastNameInput).fill(lname);
        await this.page.locator(this.locators.postalCodeInput).fill(postalCode);
    }

    async clickContinueButton() {
        await this.page.locator(this.locators.continueButton).click();
    }

    async clickFinishButton() {
        await this.page.locator(this.locators.finishButton).click();
    }

    async getOrderMessage() {
        return await this.page.locator(this.locators.orderMessageText).textContent();
    }
}