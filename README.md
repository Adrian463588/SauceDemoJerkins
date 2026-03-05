# Automate Saucedemo E2E Testing Framework

This project is an End-to-End (E2E) testing framework for the [Saucedemo](https://www.saucedemo.com/) web application. It is built from scratch using modern automation tools and best practices.

## 🛠️ Technology Stack & Architecture

- **Core Engine:** [Cypress](https://www.cypress.io/)
- **Language:** TypeScript
- **Behavior-Driven Development (BDD):** Cucumber (via `@badeball/cypress-cucumber-preprocessor`)
- **Design Pattern:** Strict Page Object Model (POM)
- **Data-Driven Testing (DDT):** JSON Fixtures
- **Reporting:** Mochawesome & Allure Reports

## 📂 Project Structure

- `cypress/e2e/features/` - Cucumber Gherkin `.feature` files and standard Cypress `.cy.js` files.
- `cypress/support/step_definitions/` - Step Definitions linking Gherkin steps to POM actions.
- `cypress/support/pages/` - Page Object Model (POM) classes housing element selectors and actions.
- `cypress/fixtures/` - JSON data files for Data-Driven Testing.
- `cypress/reports/` - Output directory for generated Mochawesome and Allure reports.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- IDE of choice (e.g., VS Code).

### Installation
Clone this repository and install the required dependencies:

```bash
git clone <your-repo-url>
cd AutomateSaucedemo
npm install
```

## ⚙️ Running Tests

We have configured several convenient NPM scripts to execute tests easily.

### Open Interactive Test Runner (Headed)
Opens the Cypress UI to visually watch tests and debug.
```bash
npm run cy:open
```

### Run All Tests (Headless)
Runs all `.feature` and `.cy.js` tests silently in the background.
```bash
npm run test
```

## 📊 Reporting

This framework supports two robust reporting mechanisms.

### Mochawesome (Preferred)
Automatically merges test chunks and generates a beautiful HTML dashboard.

1. **Clean old results:** `npm run pretest`
2. **Run tests:** `npm run test`
3. **Generate & Merge HTML Report:** `npm run final:report` 
4. View the result inside `cypress/reports/combined-report.html`.

*(Alternatively, run `npm run test:mochawesome` to do all the above in one step).*

### Allure 
1. **Run tests with Allure enabled:** `npm run test:allure`
2. **Generate and open the report:** `npm run report:allure`

## ☁️ Cypress Cloud Integration
To hook this local execution up to your Cypress Dashboard, ensure your `projectId` is set in `cypress.config.ts`. Run the following command with your private record key:
```bash
npm run test:record --key <your_dashboard_key_here>
```

---
*Developed as a structured SDET E2E Automation architecture blueprint.*
