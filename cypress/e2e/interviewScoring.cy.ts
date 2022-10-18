/// <reference types="cypress"/>
//test is broken

describe("checks interview scoring ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");

    cy.get("#formBasicEmail").type("danny@gmail.com");
    cy.get("#formBasicPassword").type("johnspassword");
    cy.get(".btn").click();
    cy.url().should("eq", "http://localhost:3000/dashboard");
    cy.wait(2000);
  });

  let numberPassing;
  let numberTotal;
  let percentPassed;

  it("gests intital values", () => {
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

  it("should have higher percentage then before the successful interview"),
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
    };
});
