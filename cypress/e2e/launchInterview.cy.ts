/// <reference types="cypress"/>

describe("test launch interview button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  it("should not be able to launch an interview with no student selected", () => {
    cy.get('[style="padding-right:0"] > button').click({ force: true });
    cy.url().should("eq", "http://localhost:3000/dashboard");
    cy.get(".AllRatings_scroll__aC0kb > :nth-child(1)").click();
    cy.get('[style="padding-right:0"] > button').click();
    cy.url().should("include", "http://localhost:3000/interview");
  });
});
