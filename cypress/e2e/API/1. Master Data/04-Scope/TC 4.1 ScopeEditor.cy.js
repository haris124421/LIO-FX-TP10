import company_data from "../../../../fixtures/api_data/companyData.json"
import commonFucntions from "../../../../helpers/commonFunctions";
import jwtToken from "../../../../fixtures/api_data/loginToken.json"

describe('Scope', ()=> {

    it('should add scope', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BaseURLApi')+'/LIOWebAPI/api/ScopeEditor',
            headers : {"Authorization": "Bearer " +jwtToken.Token},
            body: {
                "UserId": Cypress.env('UserId'),
                "UserName":Cypress.env('UserName'),
                "DataFilter":{
                },
                "ResourcePlanFilter":{
                },
                "OwnerId":company_data.UpdatedUnitId,
                "isFreezeSchedule":false,
                "OrderBy":null,
                "OrderType":null,
                "ScopeDetail":{
                   "Id":"",
                   "Name":commonFucntions.generate_random_string(8),
                   "ScopeConcurrencyValue":"",
                   "Abbreviation":commonFucntions.generate_random_string(5),
                   "Annotation":"",
                   "UnitId":company_data.UpdatedUnitId,
                   "Color":"#b02424",
                   "RevisionId":""
                }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/scope.json',response.body)
        })
    }) 
})