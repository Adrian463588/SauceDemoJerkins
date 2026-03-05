declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to login to saucedemo
     * @param username string
     * @param password string
     */
    login(username: string, password: string): Chainable<void>;
  }
}
