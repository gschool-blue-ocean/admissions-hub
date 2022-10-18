/// <reference types="cypress"/>

context("Create new student", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");

    cy.get("#formBasicEmail").type("danny@gmail.com");
    cy.get("#formBasicPassword").type("johnspassword");
    cy.get(".btn").click();
    cy.url().should("eq", "http://localhost:3000/dashboard");
  });

  it("should create a new student", () => {
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
    cy.get(".AllRatings_cell__eianI").click();
    cy.get(
      '[style="display: flex; align-items: center; cursor: pointer;"] > [style=""]'
    ).click();
  });
});
