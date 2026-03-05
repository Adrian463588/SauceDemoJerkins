export class InventoryPage {
  // Selectors as private getters
  private get inventoryList() {
    return cy.get('.inventory_list');
  }

  private get addToCartBackpackButton() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  private get cartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  private get shoppingCartLink() {
    return cy.get('.shopping_cart_link');
  }

  // Action methods
  public addBackpackToCart() {
    this.addToCartBackpackButton.click();
  }

  public clickShoppingCart() {
    this.shoppingCartLink.click();
  }

  // Element providers for assertions
  public getInventoryList() {
    return this.inventoryList;
  }

  public getCartBadge() {
    return this.cartBadge;
  }
}
