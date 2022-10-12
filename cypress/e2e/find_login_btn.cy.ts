/// <reference types="cypress"/>

context("Admin Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("should find our login page and message", () => {
    cy.get("button").contains("login");
  });
});
