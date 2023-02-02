const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3000/login';
const fs = require('fs');

(async () => {
    let browser, page;
    try {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 900 });
        await page.goto(pageUrl);
        console.log('loging in');
        await page.type('#logEmail', 'temp');
        await page.type('#logPassword', 'temp');
        await Promise.all([
            page.click('#loginButton'),
            page.waitForNavigation({ timeout: 60000 }),
        ]);

        console.log('done logging in');
        await page.waitForSelector('#dataFile', { timeout: 60000 });

        console.log('got it all');

        const qtrInterviews = await page.$eval('#dataFile', (el) => el.textContent);

        fs.writeFileSync('pulled_data.txt', ` ${qtrInterviews}`);
        console.log(`
        Data written to file successfully go check it out!
        pulled users passing and total interviews.
        Name: pulled_data.txt
        `);
    } catch (error) {
        console.log(error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();
