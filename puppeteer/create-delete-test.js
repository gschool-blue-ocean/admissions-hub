

// const puppeteer = require('puppeteer');
// const pageUrl = 'http://localhost:3000/login';

// (async () => {
//     let browser, page;
//     try {
//         browser = await puppeteer.launch({ headless: false });
//         page = await browser.newPage();
//         await page.goto(pageUrl);

//         await page.type('#logEmail', 'danny@TEMP.com');
//         await page.type('#logPassword', 'TEMP');
//         page.click('.col-7 button');
//         await page.waitForNavigation({ timeout: 60000 });

//         await page.waitForSelector('#addStudent', { timeout: 60000 });
//         page.click('.col-6 button');

//         await page.waitForSelector('#firstName', { timeout: 60000 });
//         await page.type('#firstName', 'John');
//         await page.type('#lastName', 'Doe');
//         await page.type('#email', 'john.doe@example.com');

//         const select = await page.$('select');
//         await select.select('MCSP-11');
        
//         await page.click('button[type="submit"]');
//         await page.waitForNavigation({ timeout: 60000 });

//         console.log('Student created successfully');
//     } catch (error) {
//         console.log('Error: ', error);
//     } finally {
//         if (browser) {
//             await browser.close();
//         }
//     }
// })();
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
            console.log('Clicked on add student button');
            console.log('Filling info...');
            await page.type('#firstName', 'jarrett');
            await page.type('#lastName', 'theCatGuy');
            await page.type('#email', 'MIT94@TEMP.com');
            await page.click('.dropdown select');
            await page.waitForSelector('#mcsp', { timeout: 60000 });


            const select = await page.$('select');
            await select.select('MCSP-18');
            await page.waitForSelector('.create', { timeout: 60000 });
            await page.click('.create button');

            console.log('just create a student!!');
        
        

            // const info = await page.$eval('#mcsp', (el) => el.textContent);
            // console.log(info);
            // await page.select('#mcsp option');


            // Once the element is present, interact with it
            
            // await page.type('#password', 'TEMP');

            // Wait for the navigation to complete before continuing
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

  
