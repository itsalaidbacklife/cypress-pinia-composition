import { useCounterStore } from '../../src/stores/counter';

describe('Testing pinia stores', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // Works as expected
  it('Reads the DOM', () => {
    cy.get('[data-cy=count]').contains('The count is 0');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains('The count is 1');
  });

  it('Reads the pinia store via the global component scope', () => {
    // Get the pinia store directly off the window object
    cy
      .window()
      .its('counterStore.counter')
      .should('equal', 0);
      // Click the increment button
      cy.get('[data-cy=increment]').click();
      // Re-check store and it should now be incremented
      cy
      .window()
      .its('counterStore.counter')
      .should('equal', 1);
  });

  // This fails -- can't use `useCounterStore()` without a global pinia
  it.skip('Fails to read the pinia store using the useCounterStore() helper', () => {
    // Can't call useCounterStore() without pinia gloabal pinia instance
    cy.wrap(useCounterStore())
      .then((counterStore) => {
        expect(counterStore.counter).to.eq(0);
      });
  });
});

