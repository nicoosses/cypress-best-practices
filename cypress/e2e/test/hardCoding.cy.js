describe('TC Hard Code - Login', () => 
{
    beforeEach('Visitar la pagina de Login',() => {
        cy.visit("https://demo.testim.io")
        cy.contains("Log in").should("be.visible")
        cy.url().should("contain","testim")
        cy.contains("Log in").click()
    })
    it('TC1: Login Succesfully', () => 
    {
        cy.get("[type='text']").eq(4)
            .type("Upex") //username
        cy.get("[type='password']")
            .type("12345") //password
        cy.get("button[type='submit']") //boton
            .click()
        
        cy.contains("Hello").should("be.visible")
    });
    
    it('TC2: Empty password return error', () => {
        
        cy.get('[type="text"]').eq(4)
            .type("Upex")
        cy.get('button[type="submit"]')
            .click()
        cy.contains("Password is a required field").should("be.visible")
        
    });

});