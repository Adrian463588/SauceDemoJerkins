// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
// ***********************************************

import { LoginPage } from './pages/LoginPage';

Cypress.Commands.add('login', (username, password) => {
  const loginPage = new LoginPage();
  loginPage.visit();
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
  loginPage.clickLogin();
});
