const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3000/login';
const delay = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

(async () => {
    let browser, page;
    try {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        await page.goto(pageUrl);
        await page.type('#logEmail', 'temp');
        await page.type('#logPassword', 'temp');
        page.click('#loginButton');
        await page.waitForNavigation({ timeout: 60000 });
        await delay(4000);
        await page.waitForSelector('#studentName', { timeout: 30000 });
        await page.click('#studentName');
        await page.waitForSelector('#deleteStudent', { timeout: 30000 });
        await page.click('#deleteStudent');
        await delay(4000);
        console.log('deleted student!!');
    } catch (error) {
        console.log('Error: ', error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();
