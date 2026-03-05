import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

When('I navigate to the cart', () => {
  inventoryPage.clickShoppingCart();
});

When('I go to checkout', () => {
  cartPage.clickCheckout();
});

When('I fill in checkout information using valid customer data from fixture {string}', (fixtureName: string) => {
  // To handle .json strings if provided
  const fixturePath = fixtureName.replace('.json', '');
  
  cy.fixture(fixturePath).then((data) => {
    checkoutPage.enterFirstName(data.firstName);
    checkoutPage.enterLastName(data.lastName);
    checkoutPage.enterPostalCode(data.postalCode);
  });
  checkoutPage.clickContinue();
});

When('I complete the checkout process', () => {
  checkoutPage.clickFinish();
});

Then('I should see the checkout complete message {string}', (expectedMessage: string) => {
  checkoutPage.getCompleteHeader().should('be.visible').and('have.text', expectedMessage);
});
