// Importing the necessary page object
const { register } = require('../../support/Pages/register.page');
import { generateUserData } from '../../support/Pages/userData';

// Retrieving the required endpoints and data from Cypress environment variables
const { registerPage } = Cypress.env('endpoint');
const {currency} = Cypress.env('DataUser');


Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevents uncaught errors from causing test failures
  return false;
});

describe('User Register', () => {

  before(() => {
    // Visit the registration page
    cy.visit(registerPage, {failOnStatusCode: false});

    // Verify if the URL contains the expected register page URL
    cy.url().should('contain', registerPage);
  });

  it('register successfully', () => {

    const {email, password} = generateUserData();

    // Click on a button with class '.button--t1' inside an element with class '.modal__buttons'
    cy.get('.modal__buttons > .button--t1').click();

    // Enter the username/email in the registration form
    register.enterUsername(email);

    // Accept the terms and conditions
    register.termsAndConditions();

    // Select the currency from the dropdown
    register.selectCurrencyDropdown(currency);

    // Enter the password in the registration form
    register.enterPassword(password);

    // Enter the confirmation password in the registration form
    register.enterConfirmationPassword(password);

    // Submit the registration form
    register.submitRegister();

    // Wait for 50 seconds for captcha solving
    cy.wait(50000);

    // Verify if the success notification is visible
    cy.get('.notification__content').should('be.visible');
  });
});