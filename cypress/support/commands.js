// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('generateToken', () =>{
    cy.request({
      method: 'POST',
      url: Cypress.env('BaseURLApi')+'/ACLWebAPI/api/User/Login',
      body: {
        "UserName":"haris",
        "Password":"123aB",
        "RequestId":"",
        "NotificationRequest":{
           "UserId":"",
           "RequestId":"",
           "TopXAlerts":2,
           "TopXMessages":2,
           "ShowOnlyNonRead":false
        }
     }
    }).then( (response) =>{
        expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
        cy.writeFile('cypress/fixtures/api_data/loginToken.json',response.body)
    })
  })