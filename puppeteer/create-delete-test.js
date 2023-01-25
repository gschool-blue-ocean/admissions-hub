// const puppeteer = require("puppeteer");
// const pageUrl = "http://localhost:3000/login";

// (async () => {
//   let browser, page;
//   try {
//     browser = await puppeteer.launch({ headless: false });
//     page = await browser.newPage();
//     await page.goto(pageUrl);

//     // Enter email and password
//     console.log("Filling Email and Password...");
//     await page.type("#formBasicEmail", "danny@TEMP.com");
//     await page.type("#formBasicPassword", "TEMP");

//     // Click login button and wait for navigation
//     console.log("Clicking login button...");
//     await Promise.all([
//       page.click(".col-7 button"),
//       page.waitForNavigation({ timeout: 60000 }),
//     ]);

//     // console.log("Clicking add student button..."),
//     //   await Promise.all([
//     //     page.click("#add-student div"),
//     //     console.log("Filling student details..."),
//     //     page.type("#first-name", "fernando"),
//     //     page.type("#last-name", "TEMP"),
//     //     page.type("#email", "Fcastro958@TEMP.com"),
//     //     page.type("#formBasicPassword", "TEMP"),
//     //     page.click("#mscp"),
//     //   ]);
//     // // console.log("submitting the form..."),
//     // Wait for the element to be added to the DOM
//     await page.waitForSelector("#add-student", { timeout: 60000 });

//     // Once the element is present, interact with it
//     const info = await page.$eval("#add-student", (el) => el.textContent);
//     console.log(info);
//   } catch (error) {
//     console.log("Error: ", error);
//   } finally {
//     if (browser) {
//       await browser.close();
//     }
//   }
// })();
