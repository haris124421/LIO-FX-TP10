describe('Token', ()=>{

    it('should generate token', () => {
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
        
    });
})