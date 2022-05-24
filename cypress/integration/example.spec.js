import { useCounterStore } from '../../src/stores/counter';

describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // Works as expected
  it('Reads the DOM', () => {
    cy.get('[data-cy=count]').contains('The count is 0');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains('The count is 1');
  });

  // This fails -- can't use `useCounterStore()` without a global pinia
  it('Fails to read the pinia store using the useCounterStore() helper', () => {
    // Can't call useCounterStore() without pinia gloabal pinia instance
    cy.wrap(useCounterStore())
      .then((counterStore) => {
        expect(counterStore.counter).to.eq(0);
      });
  });

  // This fails -- the store is not exposed on the global app instance
  it('Fails to read the pinia store via the global component scope', () => {
    // This technique works in vue2 but not in vue3 with composition
    cy
      .window()
      .its('app')
      .then((app) => {
        console.log(app);
        console.log(app.$store); // undefined
        expect(app.$store).to.exist();
      });
  });
})
