import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Given('I navigate to the Saucedemo login page', () => {
  loginPage.visit();
});

// Original POM login step
When('I login with {string} and {string}', (username: string, password: string) => {
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
  loginPage.clickLogin();
});

// New Custom Command combined login step
When('I login via custom command with {string} and {string}', (username: string, password: string) => {
  // Handle empty strings from the outline Table
  if (username !== "") loginPage.enterUsername(username);
  if (password !== "") loginPage.enterPassword(password);
  loginPage.clickLogin();
});

// Data-driven fixture step
When('I login using valid user from fixture {string}', (fixtureName: string) => {
  cy.fixture(fixtureName).then((data) => {
    const user = data.validUsers[0];
    cy.login(user.username, user.password);
  });
});

Then('I should be redirected to the inventory page', () => {
  cy.url().should('include', '/inventory.html');
  inventoryPage.getInventoryList().should('be.visible');
});

Then('I should see the error message {string}', (errorMessage: string) => {
  loginPage.getErrorMessage().should('be.visible').and('have.text', errorMessage);
});

When('I add the "Sauce Labs Backpack" to the cart', () => {
  inventoryPage.addBackpackToCart();
});

Then('the cart badge should display {string}', (badgeCount: string) => {
  inventoryPage.getCartBadge().should('be.visible').and('have.text', badgeCount);
});

