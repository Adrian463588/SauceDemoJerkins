export class CheckoutPage {
  // Selectors
  private get firstNameInput() {
    return cy.get('[data-test="firstName"]');
  }

  private get lastNameInput() {
    return cy.get('[data-test="lastName"]');
  }

  private get postalCodeInput() {
    return cy.get('[data-test="postalCode"]');
  }

  private get continueButton() {
    return cy.get('[data-test="continue"]');
  }

  private get finishButton() {
    return cy.get('[data-test="finish"]');
  }

  private get completeHeader() {
    return cy.get('.complete-header');
  }

  // Actions
  public enterFirstName(firstName: string) {
    this.firstNameInput.clear().type(firstName);
  }

  public enterLastName(lastName: string) {
    this.lastNameInput.clear().type(lastName);
  }

  public enterPostalCode(postalCode: string) {
    this.postalCodeInput.clear().type(postalCode);
  }

  public clickContinue() {
    this.continueButton.click();
  }

  public clickFinish() {
    this.finishButton.click();
  }

  // Elements for assertions
  public getCompleteHeader() {
    return this.completeHeader;
  }
}
