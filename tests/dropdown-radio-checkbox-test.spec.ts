import { test, expect } from '@playwright/test';

test.only('UI interaction - dropdowns', { tag: ["@smoke", "@login", "@dropdown"] }, async ({ page }) => {
    await page.goto("https://sharikmp.github.io/learn.automation/dropdowns.html");
    await page.locator("#language").selectOption({ label: "Python" });
    await page.locator("#language").selectOption({ value: "typescript" });
    await page.locator("#language").selectOption("typescript");
    await page.locator("#language").selectOption({ index: 1 });
    await page.locator("#subscribe").click();
    // Todo - Mariya - click submit and extract text and add assertion

    await page.locator("[value='female']").click();
    // Todo - Mariya - click submit and extract text and add assertion

    await page.locator("#frameworks").selectOption([{ value: "angular" }, { label: "React" }, { index: 3 }]);
    await page.locator("//*[text()='Multi-Select Dropdown']/parent::section//button").click();
    const output4 = (await page.locator("#output4").textContent())?.toLowerCase();
    expect(output4).toContain("angular");
    expect(output4).toContain("react");
    expect(output4).toContain("svelte");

    await page.getByText("Select an option").click();
    await page.getByText("Custom Option 2").click();

    expect(await page.locator("#output5").textContent()).toBe("Selected: 2");

});