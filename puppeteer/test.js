const puppeteer = require("puppeteer");
const pageUrl = "http://localhost:3000/login";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(pageUrl);
  await page.screenshot({ path: "loginpage.png" });
  await browser.close();
})();
