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
        await page.type('#logEmail', 'temp');
        await page.type('#logPassword', 'temp');
        page.click('#loginButton');
        await page.waitForNavigation({ timeout: 60000 });
        await delay(4000);
        await page.waitForSelector('#addStudent', { timeout: 60000 });
        // Check if the element is present before trying to interact with it
        const isPresent = (await page.$('#addStudent')) !== null;
        console.log(isPresent); // check if true
        if (isPresent) {
            await page.click('#addStudent');
            await page.type('#firstName', 'mansour');
            await page.type('#lastName', 'theGuy');
            await page.type('#email', 'the.com');
            await page.click('#dropdown');
            await page.waitForSelector('#mcsp', { timeout: 60000 });
            const select = await page.$('select');
            await select.select('MCSP-18');
            await page.waitForSelector('#create', { timeout: 60000 });
            await page.click('#create');
            await delay(4000);
            console.log('just created a student');
        } else {
            console.log('Element not found on the page');
        }
    } catch (error) {
        console.log('Error: ', error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();
