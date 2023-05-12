export class LoginPage {

  login(email, password) {
    cy.visit(Cypress.env("base_url2"));
    cy.get("#Email").clear().type(email);
    cy.get("#Password").clear().type(password);
    cy.get('button[type="submit"]').click();
  }

  assertSuccessfulLogin() {
    cy.contains("Dashboard").should("be.visible");
    cy.contains("NopCommerce News").should("be.visible");
    cy.contains("Common statistics").should("be.visible");
    cy.contains("New customers").should("be.visible");
    cy.contains("Order totals").should("be.visible");
    cy.contains("Incomplete orders").should("be.visible");
    cy.contains("Bestsellers by quantity").should("be.visible");
    cy.contains("Bestsellers by amount").should("be.visible");
  }

  assertUnsuccessfulLoginWithWrongEmail() {
    cy.contains("Login was unsuccessful. Please correct the errors and try again.").should("be.visible");
  }

  assertUnsuccessfulLoginWithWrongPassword() {
    cy.contains("Login was unsuccessful. Please correct the errors and try again.").should("be.visible");
  }

  assertUnsuccessfulLoginWithEmptyFieldEmail() {
    cy.contains("Please enter your email").should("be.visible");
  }

  assertUnsuccessfulLoginWithEmptyFieldPassword() {
    cy.contains("Login was unsuccessful. Please correct the errors and try again.").should("be.visible");
  }

  logout() {
    cy.get('[href="/logout"]').click() 
  }
}
export const onLoginPage = new LoginPage();
