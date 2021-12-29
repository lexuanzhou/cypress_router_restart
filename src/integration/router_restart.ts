describe('Restart Router', () => {
    before(() => {
        cy.visit(`${Cypress.env('url')}`);
    });
    
    it('Login using username and password', ()=> {
        cy.get('#username').type(`${Cypress.env('username')}`);
        cy.get('#password').type(`${Cypress.env('password')}`);
        cy.get('.btn').click();
        cy.get("#troubleloc").click();
        cy.get('#resetloc').click();
    });

    after(() => {
        cy.contains('Logout').click();
    });
});