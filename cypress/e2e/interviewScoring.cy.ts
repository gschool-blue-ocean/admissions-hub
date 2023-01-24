/// <reference types="cypress"/>
//test is broken

export default describe("checks interview scoring ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");

    cy.get("#formBasicEmail").type("danny@gmail.com");
    cy.get("#formBasicPassword").type("johnspassword");
    cy.get(".btn").click();
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:3000/dashboard");
  });

  let numberPassing;
  let numberTotal;
  let percentPassed;

  it("gets intital values", () => {
    cy.get("div[id=passingInterviews]").then(($div) => {
      const passingInterviews = $div.text();
      numberPassing = parseInt(passingInterviews.replace(/\D/g, ""));
    });

    cy.get("div[id=totalInterviews]").then(($div) => {
      const totalInterviews = $div.text();
      numberTotal = parseInt(totalInterviews.replace(/\D/g, ""));
    });

    cy.get("text[id=percentPassed]").then(($text) => {
      percentPassed = parseInt($text.text());
    });
  });

  it("should create a new student, launch an interview, complete the interview with passing score", () => {
    //create  new student
    cy.get("span").contains("add student").click();
    cy.get(":nth-child(1) > .AllRatings_input__2JMrd").type("billy");
    cy.get(":nth-child(2) > .AllRatings_input__2JMrd").type("bob");
    cy.get(":nth-child(3) > .AllRatings_input__2JMrd").type("billy@bob.com");
    cy.get("select").select("MCSP-13");
    cy.get(
      '[style="margin-bottom: 10px; display: flex; justify-content: center; padding-bottom: 10px;"] > .AllRatings_bob__K6dto'
    ).click();
    cy.get("input").type("billy");
    cy.get(".AllRatings_scroll__aC0kb").contains("billy@bob.com");

    //launches interview
    cy.get('[style="padding-right: 0px;"] > button').click({ force: true });
    cy.url().should("include", "http://localhost:3000/dashboard");
    cy.get(".AllRatings_scroll__aC0kb > :nth-child(1)").click();
    cy.get('[style="padding-right: 0px;"] > .AllRatings_bob__K6dto').click();
    cy.url().should("include", "http://localhost:3000/interview");

    //passes interview
    cy.get(
      ':nth-child(1) > [style="display: flex; margin-top: -2px;"] > :nth-child(4) > svg > path'
    ).click();
    cy.get(
      ':nth-child(2) > [style="display: flex; margin-top: -2px;"] > :nth-child(4) > svg > path'
    ).click();
    cy.get(
      ':nth-child(3) > [style="display: flex; margin-top: -2px;"] > :nth-child(4) > svg > path'
    ).click();

    //completes interview
    cy.get("button").contains("Complete Interview").click({ force: true });
  });

  it("should have higher percentage then before the successful interview",
    () => {
      cy.get("div[id=passingInterviews]").then(($div) => {
        const passingInterviews2 = $div.text();
        let numberPassing2 = parseInt(passingInterviews2.replace(/\D/g, ""));

        expect(numberPassing2).to.equal(numberPassing + 1);
      });

      cy.get("div[id=totalInterviews]").then(($div) => {
        const totalInterviews2 = $div.text();
        let numberTotal2 = parseInt(totalInterviews2.replace(/\D/g, ""));

        expect(numberTotal2).to.equal(numberTotal + 1);
      });

      cy.get("text[id=percentPassed]").then(($text) => {
        const percentPassed2 = parseInt($text.text());
      });
    });
});

// This code is a test script written in Cypress, which is an end-to-end testing framework for web applications. It is checking the functionality of a feature that involves scoring interviews for a web application.

// The script starts by visiting the login page of the application, entering the email and password, and logging in. Then it waits for 2 seconds and gets the number of passing interviews, total number of interviews, and the percentage of passing interviews from the web page.

// After that, it creates a new student, launches an interview for that student, completes the interview with a passing score, and asserts that the percentage of passing interviews is higher than before the successful interview.

// The script uses a combination of Cypress commands, like cy.visit(), cy.get(), cy.type(), cy.click(), cy.url(), cy.wait(), and cy.select(), to interact with the web page and perform various actions.

// It also uses JavaScript functions, like parseInt() and replace() to extract numerical values from text elements on the web page.

// It also uses Jest's describe and it to create test suites and test cases, and expect to assert the expected outcome.

// The /// <reference types="cypress"/> is a TypeScript reference comment that allows Cypress types to be used in this file without importing them.

// It seems that the test is broken because in the last it block it has a typo, it needs to remove the "," after the test description

// it("should have higher percentage then before the successful interview"),
// () => {

// It should be

// it("should have higher percentage then before the successful interview", () => {

// Once that fixed, the test should run fine.