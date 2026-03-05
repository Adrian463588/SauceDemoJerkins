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

```text
AutomateSaucedemo/
├── cypress/
│   ├── e2e/
│   │   ├── features/          # Gherkin .feature files (BDD)
│   │   └── BASIC_AUTOMATION/  # Standard Cypress .cy.js tests
│   ├── fixtures/              # JSON data files for Data-Driven Testing
│   ├── support/
│   │   ├── pages/             # Page Object Model (POM) classes
│   │   └── step_definitions/  # Cucumber Step Definitions
│   └── reports/               # Auto-generated Mochawesome & Allure reports
├── cypress.config.ts          # Core Cypress configuration (esbuild, reporters)
├── Jenkinsfile                # Jenkins CI/CD Pipeline configuration
├── package.json               # Dependencies and custom NPM scripts
└── tsconfig.json              # TypeScript compilation settings
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- IDE of choice (e.g., VS Code).
- **Jenkins** server (for CI/CD runs).

### Installation
Clone this repository and install the required dependencies:

```bash
git clone <your-repo-url>
cd AutomateSaucedemo
npm install
```

## ⚙️ Running Tests Local

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

## 🔄 CI/CD with Jenkins

This project is fully integrated with Jenkins to run automatically on every code push.

### How to Trigger the Pipeline
The `Jenkinsfile` is configured with the `githubPush()` trigger. To trigger a run on the Jenkins server:

1. Make your code or test modifications locally.
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Update tests"
   ```
3. Push to the GitHub repository:
   ```bash
   git push origin main
   ```
4. Jenkins will automatically detect the push via webhook, check out the code, install all dependencies (including Gherkin BDD and Esbuild), run the tests headlessly, and archive the Allure and Mochawesome reports!

*Note: You must have a GitHub Webhook configured on your repository pointing to your Jenkins server (`http://<your-jenkins-ip>/github-webhook/`) for automatic triggers to work.*

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
