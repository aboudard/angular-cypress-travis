import { navigateTo, getGreeting } from './../support/po';

describe('Hello Angular', () => {
  beforeEach(navigateTo);
  it('should display welcome message', () => {
    getGreeting().contains('Welcome to appv7!');
  });

  it('has 3 links', () => {
    cy.get('app-root li a').should('have.length', 3);
  });

  it('Button has correct naming', () => {
    cy.visit('http://localhost:4200');
    cy.get('#addtodobutton').should('contain', 'Add Todo');
  });

  it('Add Todo button is enabled when input is not empty', () => {
    cy.get('#addtodobutton')
      .should('have.attr', 'disabled')
      .get('#todoinput')
      .type('SomeTodo')
      .get('#addtodobutton')
      .should('not.have.attr', 'disabled');
  });

  it('Submit Form should clear Input', () => {
    cy.get('#todoinput')
      .type('SomeTodo')
      .get('#addtodoform')
      .submit()
      .get('#todoinput')
      .should('have.value', '');
  });

  it('After submitting form list should contain element', () => {
    cy.get('#todoinput')
      .type('SomeTodo')
      .get('#addtodoform')
      .submit()
      .get('#todolist>li')
      .its('length')
      .should('be.eq', 1);
  });

  it("After clicking 'done' the item should contain done css class", () => {
    cy.get('#todoinput')
      .type('SomeTodo')
      .get('#addtodoform')
      .submit()
      .get('#doneButton')
      .click()
      .get('#todolist>li s')
      .first()
      .should('have.class', 'inactive');
  });

});
