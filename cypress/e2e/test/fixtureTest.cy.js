import 'cypress-mochawesome-reporter/register';


describe('TC Fixture - Login', () => 
    {
        beforeEach('Visitar la pagina de Login',() => {
            cy.visit("https://demo.testim.io")
            cy.contains("Log in").should("be.visible")
            cy.url().should("contain","testim")

            cy.fixture("DOM/spacebeyond/account.Page").then((the) => 
            {
                    cy.contains(the.LoginButton.On)
                    .should("be.visible")
                    .click()
            })
        })
        it('TC1: Login Succesfully', () => 
        {

            cy.fixture("DOM/spacebeyond/account.Page").then((the) => 
            {
                cy.get(the.username.input)
                    .type(the.username.data.valid)
                cy.get(the.password.input)
                    .type(the.password.data.valid)
                cy.get(the.submitbutton)
                    .click()
                cy.contains(the.LoginButton.Off).should("be.visible")
            })
        });
        
    
    });