const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3000/login';
const delay = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

(async () => {
    let browser, page;
    try {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 900 });
        await page.goto(pageUrl);
        // Enter email and password
        await delay(4000);
        await page.type('#logEmail', 'temp');
        await page.type('#logPassword', 'temp');
        // Click login button and wait for navigation
        await Promise.all([
            page.click('#loginButton'),
            page.waitForNavigation({ timeout: 60000 }),
        ]);
        await delay(2000);
        await page.waitForSelector('#nav-dropdown-dark-example', {
            timeout: 60000,
        });
        await delay(1000);
        await page.click('#nav-dropdown-dark-example');
        await page.waitForSelector('#logOut', { timeout: 60000 });
        await delay(1000);
        await page.click('#logOut');
        await delay(2000);
        console.log('Successfully logged out');
    } catch (error) {
        console.log(error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();
