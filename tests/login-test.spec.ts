import { test, expect } from '@playwright/test';

test('Perform login', {tag: ["@smoke", "@login", "@regression"]}, async ( {page} ) => {
    // Test data
    const url = "https://sharikmp.github.io/learn.automation/";
    const username = "admin";
    const password = "@#$Admin@#$";
    const expectedWelcomeMessage = 'Welcome, admin!';

    // Selectors
    const pagePageLinkSelector = '[href="login.html"]';
    const usernameInputSelector = '[name="uname"]';
    const passwordInputSelector = '[placeholder="Enter Password"]';
    const loginButtonSelector = '[type="submit"]';
    const welcomeMessageText = '#welcomeMessage';

    // Test flow
    await page.goto(url);
    await page.locator(pagePageLinkSelector).click();
    await page.locator(usernameInputSelector).fill(username);
    // await page.locator(passwordInputSelector).fill(password);
    await page.getByPlaceholder("Enter Password").fill(password);
    await page.locator(loginButtonSelector).click();
    const actualWelcomeMessage = await page.locator(welcomeMessageText).textContent();
    expect(actualWelcomeMessage).toBe(expectedWelcomeMessage);
    await page.getByText('Click here').click();
    // await page.getByTestId('register-button').click();
    await page.pause();
});