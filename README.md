# Angular Cypress Travis
![Build Status](https://travis-ci.org/aboudard/angular-cypress-travis.svg?branch=master)
https://travis-ci.org/aboudard/angular-cypress-travis

Demo project with Angular, running in Travis CI both unit tests and cypress e2e tests.

This project runs with Angular CLI version 8.3.20.

## Cypress reporting configuration
Using mocha : 5.2.0 / version 6 bugs
Using mochawesome
Refer to cypress.json for reporting configuration

## Karma Configuration
singleRun: true
Prevent infinite watch mode on unit tests, ensures Travis CI knows job is done.

## Travis configuration
Only one task to run after angular/cli install : 
"cypress:ci": "ng build --prod && run-p --race start:ci cypress:run test"
Parallel run http server and tests with https://www.npmjs.com/package/npm-run-all
With option --race : shut down server when finished.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test --code-coverage` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run cypress:open` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

