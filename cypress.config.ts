import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  projectId: "26ixh9",
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    specPattern: ["**/*.feature", "**/*.cy.js", "**/*.cy.ts"],
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Add allure plugin
      allureWriter(on, config);

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    env: {
      allureReuseAfterSpec: true
    }
  },
});
