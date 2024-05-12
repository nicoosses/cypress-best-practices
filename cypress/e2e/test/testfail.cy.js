import 'cypress-mochawesome-reporter/register';


describe('TC Fixtire - Login', () => 
    {
        beforeEach('Visitar la pagina de Login',() => 
        {
            cy.gotoLogin(parameter,to,fail,test)
            //cy.SignIn()
            cy.customSignIn("Monito","3000")
        })
        it('TC1: Login Succesfully', () => 
        {

        });
        
    
    });
