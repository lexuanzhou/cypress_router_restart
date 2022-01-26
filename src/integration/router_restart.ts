import { copyFileSync } from "fs";

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
        cy.get('#btn1').click();
        cy.get('#popup_ok').click();
    });

});