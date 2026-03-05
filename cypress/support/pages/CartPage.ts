export class CartPage {
  // Selectors
  private get checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }

  private get cartItems() {
    return cy.get('.cart_item');
  }

  // Actions
  public clickCheckout() {
    this.checkoutButton.click();
  }

  // Elements for assertions
  public getCartItems() {
    return this.cartItems;
  }
}
