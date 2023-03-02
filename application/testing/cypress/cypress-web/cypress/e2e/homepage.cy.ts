describe('homepage', () => {
    it('shows correct title', () => {
        cy.visit('/');
        cy.title().should('eq', 'Web Project');
    });
});

export {};
