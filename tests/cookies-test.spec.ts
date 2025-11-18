import { test, expect } from '@playwright/test';

const tags = [
    "@smoke",   // Suite - smoke/regression/sanity
    "@ui",      // test type - ui/api/db   
    "@cookies"   // Feature - alerts/notifications/messaging
];

test('UI interaction - alerts - accepted', { tag: tags }, async ({ page, context }) => {
    const url = "https://sharikmp.github.io/learn.automation/alerts-cookies.html";


    await context.addCookies([
        {
            name: "session_id",
            value: "agjdhhandgjhdbuvydjhvdjhshd",
            domain: "sharikmp.github.io",
            path: "/",
            httpOnly: false,
            secure: false,
            sameSite: "Lax"
        },
        {
            name: "user_id",
            value: "123456",
            domain: "sharikmp.github.io",
            path: "/",
            httpOnly: false,
            secure: false,
            sameSite: "Lax"
        }
    ]);

    // Steps
    await page.goto(url);

    await page.reload();

    await page.pause();

    const cookies = await context.cookies();
    console.log("Cookies after adding new cookie:", cookies);

});