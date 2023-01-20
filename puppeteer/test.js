const puppeteer = require("puppeteer");
const pageUrl = "http://localhost:3000/login";

//just taking a screenshot of the login page
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(pageUrl);
  await page.screenshot({ path: "loginpage.png" });

  //   const grabTechologies = await page.evaluate(() => {
  //     const
  //     const pgTag = document.querySelectorAll(".Header_para2__OCRsC div");
  //     return pgTag.innerHTML;
  //   });
  //   console.log(grabTechologies);
  await browser.close();
})();
