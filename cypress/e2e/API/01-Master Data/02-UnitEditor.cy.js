import commonFucntions from "../../../helpers/commonFunctions";
import login_details from "../../../fixtures/api_data/loginToken.json"

describe('Company', ()=> {

    it('TC 1.1.1 it should add company successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BaseURL')+'/LIOWebAPI/api/UnitEditor',
            headers : {"Authorization": "Bearer " + login_details.Token},
            body: {
                "UserId":login_details.CompleteObject.User.Id,
                "UserName":login_details.CompleteObject.User.UserName,
                "DataFilter":{
                },
                "ResourcePlanFilter":{
                },
                "OwnerId":"",
                "isFreezeSchedule":false,
                "OrderBy":"",
                "OrderType":0,
                "UnitDetail":{
                   "Id":"",
                   "Name":commonFucntions.generate_random_string(8),
                   "UnitConcurrencyValue":"",
                   "Abbreviation":commonFucntions.generate_random_string(5),
                   "Annotation":"",
                   "ParentId":"-1",
                   "Color":"#b02424",
                   "ExternalId":"",
                   "Locale":"en"
                }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/companyData.json',response.body)
        })
    }) 
})