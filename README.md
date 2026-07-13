Supplier Module Automation - Playwright


Project Overview
This project contains automated test scripts for the Supplier Module Login and Logout functionalities using Playwright with JavaScript. The framework follows Playwright best practices, including the Page Object Model (POM), reusable methods, hooks, loops, and assertions.


Tech Stack
•	Playwright
•	JavaScript
•	Node.js


Project Structure
supplier-module-automation/
│
├── pages/
│   ├── LoginPage.js
│   └── DashboardPage.js
│
├── tests/
│   ├── login.spec.js
│   └── logout.spec.js
│
├── package.json
├── playwright.config.js
└── README.md


Features
•	Automated Login functionality
•	Automated Logout functionality
•	Positive and Negative Login Test Cases
•	Keyboard Navigation Test Cases
•	Browser Navigation Validation
•	Page Object Model (POM)
•	Hooks (beforeEach)
•	Assertions
•	Reusable methods
•	Loop implementation for repetitive test scenarios


Prerequisites
•	Node.js installed
•	Visual Studio Code (recommended)


Installation
Clone the repository or extract the project ZIP, then install the dependencies:

npm install

Running the Tests
Run all tests:
npx playwright test

Run only Login tests:
npx playwright test tests/login.spec.js

Run only Logout tests:
npx playwright test tests/logout.spec.js

Run tests in headed mode:
npx playwright test --headed

View the HTML report:
npx playwright show-report

Test Coverage
Login
•	Successful Login
•	Invalid Username
•	Invalid Password
•	Invalid Username & Password
•	Empty Credentials
•	Empty Username
•	Empty Password
•	Username Case Sensitivity
•	Keyboard Navigation
•	Login using Enter Key
•	Browser Back Button Behavior
•	Session Timeout Validation
Logout
•	Successful Logout
