import { test, expect } from '@playwright/test';

test.only('UI Interactions dropdown',{tag:["@smoke","@login","@dropdown"]} ,async({page})=>{


    await page.goto("https://sharikmp.github.io/learn.automation/dropdowns.html");
    await page.locator("#language").selectOption({label:"Python"});
    await page.locator("#language").selectOption({label:"typescript"});
    await page.locator("#language").selectOption({index:1});
    await page.locator("#subscribe").click();
    expect(await page.locator("#output1")).toContainText("python");










   /*await page.goto("https://sharikmp.github.io/learn.automation/locators.html")

   await page.locator("#username").fill("test");
   await page.locator("[name='email']").fill("test@gmail.com")
   await page.locator("[type='Submit']").click();
   expect(await page.locator("#output ").textContent()).toBe("Form submitted! Username: test, Email: test@gmail.com");
    */});

