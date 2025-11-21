import {Page} from "@playwright/test";

export class LoginPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;   
    }

    private locators = {
        usernameSelector: "#user-name",
        passwordSelector: "#password",
        loginButtonSelector: "#login-button",
        errorText: '[data-test="error"]',
    }

    async performLogin(username: string, password: string) {
        await this.page.locator(this.locators.usernameSelector).fill(username);
        await this.page.locator(this.locators.passwordSelector).fill(password);
        await this.page.locator(this.locators.loginButtonSelector).click();
    }

    async getError() {
        return await this.page.locator(this.locators.errorText).textContent();
    }

}