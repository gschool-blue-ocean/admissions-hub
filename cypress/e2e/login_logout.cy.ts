/// <reference types="cypress"/>

context("Admin Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("should login and redirect to dashboard, then logout and return to login page", () => {
    cy.get("#formBasicEmail").type("danny@gmail.com");
    cy.get("#formBasicPassword").type("johnspassword");
    cy.get(".btn").click();
    cy.url().should("eq", "http://localhost:3000/dashboard");
    cy.get("#nav-dropdown-dark-example").click();
    cy.get(".BtnLogin_logoutBtn__kMh0D").click();
    cy.url().should("eq", "http://localhost:3000/login");
  });
});

export {}
