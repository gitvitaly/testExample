import menuItems from "../fixtures/menuItems.json"
import user from "../fixtures/user.json"
require('cypress-downloadfile/lib/downloadFileCommand')
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
  cy
    .visit(Cypress.env("base_url2"))
    .get("#Email").clear().type(user.successLogin.email)
    .get("#Password").clear().type(user.successLogin.password)
    .get('button[type="submit"]').click();
});

Cypress.Commands.add('logout', () => {
  cy.get('[href="/logout"]').click()
});

Cypress.Commands.add('sidebarMenu', (menuName) => {
  cy
    .fixture('menuItems.json')
    .as('menuItems')
    .then(() => {
      const menu = menuItems.SidebarMenu.Catalog.title[menuName]
      cy
        .get('nav[class="mt-2"]')
        .contains(menuName)
        .click()
    });
});

Cypress.Commands.add('TopMenuButtonsEditProduct', (buttonsName) => {
  cy
    .fixture('menuItems.json')
    .as('buttonsName')
    .then(() => {
      const topMenu = menuItems.TopMenuButtonsEditProduct.Buttons.title[buttonsName]
      cy
        .get('div[class="wrapper"]')
        .contains(buttonsName)
        .click()
    });
});

Cypress.Commands.add('TopMenuButtonsProduct', (buttonsName) => {
  cy
    .fixture('menuItems.json')
    .as('buttonsName')
    .then(() => {
      const topMenu = menuItems.TopMenuButtonsProduct.Buttons.title[buttonsName]
      cy
        .get('div[class="float-right"]')
        .contains(buttonsName)
        .click()
    });
});