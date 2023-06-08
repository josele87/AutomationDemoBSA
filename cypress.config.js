const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://demo.casino"
  },
  env:{
    endpoint:{
      registerPage: "/user/registration",
    },
    DataUser:{
      email: "holamundo@mailinator.com",
      currency: "EUR",
      password: "Password123",
    }
  }
});
