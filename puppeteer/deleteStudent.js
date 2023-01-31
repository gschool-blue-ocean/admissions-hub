const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3000/login';


(async () => {
    let browser, page;
    try {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        await page.goto(pageUrl);

        await page.type('#logEmail', 'danny@TEMP.com');
        await page.type('#logPassword', 'TEMP');
        page.click('.col-7 button');
        await page.waitForNavigation({ timeout: 60000 });

        await page.waitForSelector('#studentName', { timeout: 30000 });

     

        await page.click('#studentName');
        
        await page.waitForSelector('#delete', { timeout: 30000 });

        await page.click('#delete');
        console.log('deleted student!!');
        
    } catch (error) {
        console.log('Error: ', error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();


