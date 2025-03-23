const {test, chromium} = require('@playwright/test')

test('Network interception', async()=>{
    const borwser = await chromium.launch();
    const context = await borwser.newContext();
    const page = await context.newPage();
    page.route("*/**", )
    await page.route('*/**', route =>{
        console.log(route.request().resourceType + " " +route.request().url())
        // if(route.request().resourceType === 'jpeg'){
        //     return route.abort();
        // }
        return route.continue();
    })
    // page.on('request', res => console.log(`${res.url}`))
    await page.goto("https://danube.sa/")
    
    await page.pause();
})