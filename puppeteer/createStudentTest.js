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

        await page.waitForSelector('#addStudent', { timeout: 60000 });
      

        // Check if the element is present before trying to interact with it
        const isPresent = await page.$('.col-6 button') !== null;
        console.log(isPresent); // check if true

        if (isPresent) {
            await page.click('.col-6 button');
            
            await page.type('#firstName', 'jarrett');
            await page.type('#lastName', 'theCatGuy');
            await page.type('#email', 'MIT94@TEMP.com');
            await page.click('.dropdown select');
            await page.waitForSelector('#mcsp', { timeout: 60000 });


            const select = await page.$('select');
            await select.select('MCSP-18');
            await page.waitForSelector('.create', { timeout: 60000 });
            await page.click('.create button');

            console.log('just created a student!!');
        
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

  