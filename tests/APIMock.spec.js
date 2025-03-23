const {test} = require('@playwright/test')

test('Maocking of API', async({page})=>{
    await page.route('*/**/api/v1/fruits', async route =>{
        const json = [{name :"Testing", id :123}]
        route.fulfill({json})
    })
    await page.goto("https://demo.playwright.dev/api-mocking")
})