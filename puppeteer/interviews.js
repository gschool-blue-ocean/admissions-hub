const puppeteer = require("puppeteer");
const pageUrl = "http://localhost:3000/login";
const fs = require("fs");

(async () => {
  let browser, page;
  try {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.goto(pageUrl);

    await page.type("#formBasicEmail", "danny@TEMP.com");
    await page.type("#formBasicPassword", "TEMP");

    await Promise.all([
      page.click(".col-7 button"),
      page.waitForNavigation({ timeout: 60000 }),
    ]);

    await page.waitForSelector("#passingInterviews", { timeout: 60000 });
    await page.waitForSelector("#totalInterviews", { timeout: 60000 });

    const passingInterviews = await page.$eval(
      "#passingInterviews",
      (el) => el.textContent
    );
    const totalInterviews = await page.$eval(
      "#totalInterviews",
      (el) => el.textContent
    );

    console.log(passingInterviews);
    console.log(totalInterviews);
  } catch (error) {
    console.log(error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
