/// <reference types="cypress"/>

describe("test launch interview button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");

    cy.get("#formBasicEmail").type("danny@gmail.com");
    cy.get("#formBasicPassword").type("johnspassword");
    cy.get(".btn").click();
    cy.url().should("eq", "http://localhost:3000/dashboard");
  });

  it("should not be able to launch an interview with no student selected", () => {
    cy.get('[style="padding-right: 0px;"] > button').click({ force: true });
    cy.url().should("include", "http://localhost:3000/dashboard");
    cy.get(".AllRatings_scroll__aC0kb > :nth-child(1)").click();
    cy.get('[style="padding-right: 0px;"] > .AllRatings_bob__K6dto').click();
    cy.url().should("include", "http://localhost:3000/interview");
  });
});
