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
        await delay(4000);
        await page.type('#logEmail', 'temp');
        await page.type('#logPassword', 'temp');
        page.click('#loginButton');
        await page.waitForNavigation({ timeout: 60000 });
        await delay(4000);
        await page.waitForSelector('#studentName', { timeout: 30000 });
        await page.click('#studentName');
        await page.waitForSelector('#updateStudent', { timeout: 30000 });
        await page.click('#updateStudent');
        // await delay(4000);
        const inputValue = await page.$eval('#updateFirstName', (el) => el.value);
        // focus on the input field
        await page.click('#updateFirstName');
        for (let i = 0; i < inputValue.length; i++) {
            await page.keyboard.press('Backspace');
        }
        await page.type('#updateFirstName', 'lug');
        // await delay(4000);
        const inputValueTwo = await page.$eval('#updateLastName', (el) => el.value);
        // focus on the input field
        await page.click('#updateLastName');
        for (let i = 0; i < inputValueTwo.length; i++) {
            await page.keyboard.press('Backspace');
        }
        await page.type('#updateLastName', 'nug');
        // await delay(000);
        await page.waitForSelector('#update', { timeout: 60000 });
        await page.click('#update');
        await delay(4000);

        console.log('updated student!!');
    } catch (error) {
        console.log('Error: ', error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();
