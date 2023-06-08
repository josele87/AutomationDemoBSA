# Cypress Automation Project
This project contains automated tests using Cypress for https://demo.casino/. It verifies the functionality of register and and the replenishment of funds in the account.

## Installation
1. Clone the repository:  ```git clone https://github.com/josele87/AutomationDemoBSA.git```
2. Navigate to the project directory: ```cd [project directory]```
3. Install the dependencies: ```npm install```

### Configuration
1. Update the configuration settings: 


    Open cypress.json and update the necessary configuration settings such as base URL, test environment, etc.

2. Configure test data: 


    Open cypress.env.json and provide the required test data such as usernames, passwords, endpoints, etc.

## Running the Tests
1. To run the tests in the Cypress Test Runner:  ```npm run test```
2. To run the tests in headless mode: ```npm run test:headless```
3. To run the tests in headless mode using the Chrome browser: ```npm run test:headless:chrome```

### Note:

### Initial Test Execution
When running the tests for the first time, it is highly recommended to use the Cypress graphical interface. This is because when attempting to register a new user or log in, the website may present a captcha challenge as a security measure. This could cause the test to fail if executed from the command line.

Executing the tests through the Cypress graphical interface allows manual interaction with the captcha challenge, enabling successful completion. Once the initial execution is completed and a user has been registered or logged in successfully, this captcha challenge will no longer be encountered in subsequent test runs.


### Subsequent Test Execution

After the initial setup and successful registration or login, the tests can be executed from both the command line and the Cypress graphical interface. There will be no need to face the captcha challenge again, enabling automated test execution in continuous integration environments or pipelines.

It is important to note that if significant changes are made to the website or its functionalities that affect the registration or login process, it may be necessary to repeat the initial execution process using the graphical interface to overcome any new security challenges.

Considering these factors during test execution will ensure consistent results and avoid unexpected interruptions during the automation process.
