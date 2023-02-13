import commonFucntions from "../../../../helpers/commonFunctions";
import jwtToken from "../../../../fixtures/api_data/loginToken.json"

describe('Company', ()=> {

    it('should add company', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BaseURLApi')+'/LIOWebAPI/api/UnitEditor',
            headers : {"Authorization": "Bearer " + jwtToken.Token},
            body: {
                "UserId": Cypress.env('UserId'),
                "UserName":Cypress.env('UserName'),
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