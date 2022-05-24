import { useCounterStore } from '../../src/stores/counter';

describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Reads the DOM', () => {
    cy.get('[data-cy=count]').contains('The count is 0');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains('The count is 1');
  });

  // I can't figure out how to read the pinia store itself
  it('Fails to read the pinia store using the useCounterStore() helper', () => {
    cy.log('Test Initial count');
    // Can't call useCounterStore() without pinia gloabal pinia instance
    cy.wrap(useCounterStore())
      .then((counterStore) => {
        expect(counterStore.counter).to.eq(0);
      });
  });
})
