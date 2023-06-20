const { defineConfig } = require("cypress");
const cypress = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1600,
  viewportHeight: 1000,
  responseTimeout: 10000,
  requestTimeout: 4000,
  trashAssetsBeforeRuns: true,
  video: false,
  screenshotOnRunFailure:true,
  retries:{
    runMode: 1,
    openMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require ('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    basUrl: 'https://thinking-tester-contact-list.herokuapp.com/'
  },
});
