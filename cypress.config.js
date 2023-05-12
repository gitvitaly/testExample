module.exports = {
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
const { defineConfig } = require('cypress')
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { downloadFile })
    },
    numTestsKeptInMemory: 5,
    defaultCommandTimeout: 6000,
    responseTimeout: 8000,
    pageLoadTimeout: 20000,
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    experimentalRunAllSpecs: true,
    screenshotsFolder: "cypress/reports/screenshots",
    videoUploadOnPasses: false,
    videosFolder: "cypress/reports/videos",
    videoCompression: false,
    viewportWidth: 1920,
    viewportHeight: 1080
  }
})


