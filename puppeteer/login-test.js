const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3000/login';

(async () => {
    let browser, page;
    try {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        await page.goto(pageUrl);

        // Enter email and password
        await page.type('#logEmail', 'temp');
        await page.type('#logPassword', 'temp');

        // Click login button and wait for navigation
        await Promise.all([
            page.click('#loginButton'),
            page.waitForNavigation({ timeout: 60000 }),
        ]);

        // Wait for the element to be added to the DOM
        await page.waitForSelector('#message', { timeout: 60000 });

        // Once the element is present, interact with it
        const info = await page.$eval('#message', (el) => el.textContent);
        console.log(`Successfully logged in and reading ${info}`);
    } catch (error) {
        console.log(error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();
