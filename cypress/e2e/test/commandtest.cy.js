import 'cypress-mochawesome-reporter/register';


describe('TC Fixtire - Login', () => 
    {
        beforeEach('Visitar la pagina de Login',() => 
        {
            cy.gotoLogin(string)
            //cy.SignIn()
            cy.customSignIn("Monito","3000")
        })
        it('TC1: Login Succesfully', () => 
        {

        });
        
    
    });