Feature: Saucedemo Login and Shopping Flow

  Background:
    Given I navigate to the Saucedemo login page

  Scenario: Successful login using standard_user custom command
    When I login via custom command with "standard_user" and "secret_sauce"
    Then I should be redirected to the inventory page

  Scenario: Data-Driven Login using fixture
    When I login using valid user from fixture "loginData"
    Then I should be redirected to the inventory page

  Scenario Outline: Negative Login Cases (Data-driven)
    When I login via custom command with "<username>" and "<password>"
    Then I should see the error message "<error_msg>"

    Examples:
      | username        | password      | error_msg                                                                 |
      | locked_out_user | secret_sauce  | Epic sadface: Sorry, this user has been locked out.                       |
      | standard_user   | wrong_pass    | Epic sadface: Username and password do not match any user in this service |
      |                 | secret_sauce  | Epic sadface: Username is required                                        |
      | standard_user   |               | Epic sadface: Password is required                                        |

  Scenario: Add Sauce Labs Backpack to the cart and verify badge
    When I login via custom command with "standard_user" and "secret_sauce"
    Then I should be redirected to the inventory page
    When I add the "Sauce Labs Backpack" to the cart
    Then the cart badge should display "1"


  Scenario: Add Sauce Labs Backpack to the cart and verify badge
    When I login with "standard_user" and "secret_sauce"
    Then I should be redirected to the inventory page
    When I add the "Sauce Labs Backpack" to the cart
    Then the cart badge should display "1"
