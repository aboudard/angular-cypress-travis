# Angular Cypress Travis
![Build Status](https://travis-ci.org/aboudard/angular-cypress-travis.svg?branch=master)
https://travis-ci.org/aboudard/angular-cypress-travis

Demo project with Angular, running in Travis CI both unit tests and cypress e2e tests.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

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

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
