const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3000/login';
const fs = require('fs');

(async () => {
    let browser, page;
    try {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        await page.goto(pageUrl);
        console.log('loging in');
        await page.type('#logEmail', 'temp');
        await page.type('#logPassword', 'temp');
        console.log('done logging in');
        await Promise.all([
            page.click('#loginButton'),
            page.waitForNavigation({ timeout: 60000 }),
        ]);

        await page.waitForSelector('#qtrInterviews', { timeout: 60000 });
        await page.waitForSelector('#yrInterviews', { timeout: 60000 });

        const qtrInterviews = await page.$eval(
            '#qtrInterviews',
            (el) => el.textContent
        );
        const yrInterviews = await page.$eval(
            'yrInterviews',
            (el) => el.textContent
        );

        fs.writeFileSync(
            'pulled_data.txt',
            ` ${qtrInterviews}\n ${yrInterviews}`
        );
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
