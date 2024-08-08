describe('Counter App', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('increments the counter', () => {
		cy.get('p[data-testid="count"]').should('have.text', '0');
		cy.get('button').contains('Increment').click();
		cy.get('p[data-testid="count"]').should('have.text', '1');
	});

	it('decrements the counter', () => {
		cy.get('p[data-testid="count"]').should('have.text', '0');
		cy.get('button').contains('Decrement').click();
		cy.get('p[data-testid="count"]').should('have.text', '-1');
	});
});
