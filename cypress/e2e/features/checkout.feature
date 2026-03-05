Feature: Checkout Process

  Scenario: Complete checkout successfully
    Given I navigate to the Saucedemo login page
    When I login via custom command with "standard_user" and "secret_sauce"
    And I add the "Sauce Labs Backpack" to the cart
    And I navigate to the cart
    And I go to checkout
    And I fill in checkout information using valid customer data from fixture "checkoutData.json"
    And I complete the checkout process
    Then I should see the checkout complete message "Thank you for your order!"
