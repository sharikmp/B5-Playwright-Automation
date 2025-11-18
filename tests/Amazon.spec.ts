import{test,expect} from '@playwright/test';

test.only('has title',async({page}) =>
    {

    await page.goto('https://www.amazon.in/');
    const searchBox=await page.locator("//input[@placeholder='Search Amazon.in']");
    await searchBox.fill("Mobile");
    await searchBox.press("Enter");
    

      await page.locator("//*[text()='Samsung']/parent::a//div").click();
    await page.locator("//*[text()='4 to 5.9 GB']/parent::a//div").click();

    const title = await page.locator("[data-cy='title-recipe'] h2 span").first().textContent();
    expect(title?.toLowerCase()).toContain("samsung");
  console.log(title);


});