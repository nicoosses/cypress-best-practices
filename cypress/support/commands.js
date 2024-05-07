

Cypress.Commands.add("gotoLogin", () =>
{
    cy.visit("https://demo.testim.io")
    cy.contains("Log in").should("be.visible")
    cy.url().should("contain","testim")

    cy.fixture("DOM/spacebeyond/account.Page").then((the) => 
    {
            cy.contains(the.LoginButton.On)
            .should("be.visible")
            .click()
    })
}),


// Cypress.Commands.add("pending", () => 
// {

// })

Cypress.Commands.add("SignIn", ()=> 
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
    })

Cypress.Commands.add("customSignIn", (username,password)=> 
    {
        cy.fixture("DOM/spacebeyond/account.Page").then((the) => 
            {
                cy.get(the.username.input)
                    .type(username)
                cy.get(the.password.input)
                    .type(password)
                cy.get(the.submitbutton)
                    .click()
                cy.contains(the.LoginButton.Off).should("be.visible")
            })
    })