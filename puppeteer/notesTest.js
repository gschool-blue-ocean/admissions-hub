const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3000/login';
const delay = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

(async () => {
    let browser, page;
    try {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 900});
        await page.goto(pageUrl);
        await page.type('#logEmail', 'temp');
        await page.type('#logPassword', 'temp');
        page.click('#loginButton');
        await page.waitForNavigation({ timeout: 60000 });
        await delay(2000);
        await page.waitForSelector('#studentName', { timeout: 30000 });
        await page.click('#studentName');
        await delay(2000);
        await page.waitForSelector('#notesButton', { timeout: 30000 });
        await page.click('#notesButton');
        await delay(2000);
        await page.waitForSelector('#problem1Rating', { timeout: 30000 });
        await page.click('#problem1Rating');
        await delay(2000);
        await page.waitForSelector('#problem2Rating', { timeout: 30000 });
        await page.click('#problem2Rating');
        await delay(2000);
        await page.waitForSelector('#problem3Rating', { timeout: 30000 });
        await page.click('#problem3Rating');
        await delay(2000);
        await page.waitForSelector('#returnButton', { timeout: 30000 });
        await page.click('#returnButton');
        await delay(4000);
    } catch (error) {
        console.log('Error: ', error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();
