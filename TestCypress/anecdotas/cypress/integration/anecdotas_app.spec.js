describe('Anecdotas App', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});
	it('frontpage can be opened', () => {
		cy.contains('Anecdote of the day');
		cy.get('#anecdotaselec');
		cy.get('#votosselec');
	});
	it('can vote the anecdote', () => {
		cy.get('#votar').click();
	});
	it('can see anecdote with most votes', () => {
		cy.get('#votar').click();
		cy.contains('Anecdote with most votes');
		cy.get('#notamasvotada');
		cy.get('#numerodevotos');
	});
	describe('when go next anecdote', () => {
		beforeEach(() => {
			cy.contains('next anecdote').click();
		});
		it('can vote the new anecdote', () => {
			cy.get('#votar').click();
			//haciendo doble votación para que sea el más votado y aparezca en la pantalla correspondiente(más votado)
			cy.get('#votar').click();
		});
	});
});
