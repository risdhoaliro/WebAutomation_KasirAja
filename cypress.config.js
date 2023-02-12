const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "x7tspq",
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    // testIsolation: false,
    chromeWebSecurity: false,
  },
});

