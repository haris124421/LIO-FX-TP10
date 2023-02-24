import login_data from "../../../fixtures/test_data/login.json"
describe('Token', ()=>{

    it('TC 1.0.1 it should generate auth token successfully', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('BaseURLApi')+'/ACLWebAPI/api/User/Login',
            body: {
              "UserName":Cypress.env('USERNAME'),
              "Password":Cypress.env('PASSWORD'),
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
        
    });
})