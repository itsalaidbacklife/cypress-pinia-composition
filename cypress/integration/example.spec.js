

describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Reads the DOM', () => {
    cy.get('[data-cy=count]').contains('The count is 0');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains('The count is 1');
  });
})
