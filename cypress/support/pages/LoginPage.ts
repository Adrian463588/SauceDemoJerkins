export class LoginPage {
  // Selectors as private getters
  private get usernameInput() {
    return cy.get('[data-test="username"]');
  }

  private get passwordInput() {
    return cy.get('[data-test="password"]');
  }

  private get loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  private get errorMessage() {
    return cy.get('[data-test="error"]');
  }

  // Action methods
  public visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  public enterUsername(username: string) {
    this.usernameInput.clear().type(username);
  }

  public enterPassword(password: string) {
    this.passwordInput.clear().type(password);
  }

  public clickLogin() {
    this.loginButton.click();
  }

  // Element providers for assertions
  public getErrorMessage() {
    return this.errorMessage;
  }
}
