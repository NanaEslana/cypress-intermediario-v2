const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://intranet.ctism.ufsm.br',
  },
  fixturesFolder: false,
  video: false,
});
