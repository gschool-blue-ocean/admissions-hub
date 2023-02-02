const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3000/login';
const delay = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

//just taking a screenshot of the login page
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 900 });
    await page.goto(pageUrl);
    await page.waitForNavigation({ timeout: 30000 }), await delay(2000);
    await page.screenshot({ path: 'logInPage.png' });
    await browser.close();
})();
