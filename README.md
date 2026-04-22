Playwright Kanban Automation Project
Overview

This project is an end-to-end test automation suite built using Playwright (TypeScript).
It tests a Kanban-style application using a data-driven testing approach.

The goal is to validate that tasks, columns, and tags render correctly across both Web and Mobile applications.

Tech Stack
Playwright
TypeScript
Node.js
JSON (test data-driven approach)

Project Structure
playwright_assignment/
│
├── tests/
│   └── kanban.spec.ts          # Main test suite (data-driven Kanban tests)
│
├── pages/
│   └── loginPage.ts           # Page Object Model (POM)
│
├── data/
│   └── testCases.json         # Test data for Kanban scenarios
│
├── playwright.config.ts       # Playwright configuration
├── package.json               # Dependencies and scripts
├── .gitignore                 # Ignored files (node_modules, etc.)
└── README.md                  # Project documentation

Features Tested
Task rendering in Kanban board
Column placement validation (To Do / In Progress / Done)
Tag validation (Feature, Bug, Design, High Priority)
Web Application workflows
Mobile Application workflows
Data-driven test execution using JSON
Running the Tests
1. Install dependencies
npm install
2. Run all tests
npx playwright test
3. Run tests with UI mode (optional)
npx playwright test --ui
4. View HTML report
npx playwright show-report
Key Design Approach
Data-Driven Testing

All test cases are stored in:

data/testCases.json

This allows:

Easy test scaling
Separation of test logic and data
Cleaner and reusable test code
Page Object Model (POM)

Page interactions are abstracted in:

pages/loginPage.ts

This improves:

Maintainability
Reusability
Cleaner test structure
Example Test Case Structure
{
  "app": "Web Application",
  "task": "Fix navigation bug",
  "column": "To Do",
  "tags": ["Bug"]
}
Notes / Learnings
Learned how to resolve strict mode locator conflicts in Playwright
Improved selector strategy using scoped locators
Implemented reusable data-driven test patterns
Strengthened debugging using Playwright test reports
Author

Matthew

Optional Improvements (Future Work)
Add CI/CD pipeline using GitHub Actions
Add API validation layer
Expand mobile test coverage
Add visual regression testing
