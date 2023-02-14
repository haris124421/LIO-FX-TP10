import company_data from "../../../../fixtures/api_data/companyData.json"
import commonFucntions from "../../../../helpers/commonFunctions";
import jwtToken from "../../../../fixtures/api_data/loginToken.json"

describe('Fuel Editor', ()=> {

    it('TC 2.1.1 it should add Fuel successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BaseURLApi')+'/LIOWebAPI/api/FuelEditor',
            headers : {"Authorization": "Bearer " + jwtToken.Token},
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
                "FuelDetail":{
                    "Id":"",
                    "Name":commonFucntions.generate_random_string(8),
                    "Number":commonFucntions.getRandomArbitrary(100,1000),
                    "FuelUnit":"",
                    "FuelConcurrencyValue":"",
                    "Color":"#b02424",
                    "RootParentId":company_data.UpdatedUnitId,
                    "RevisionId":""
                 }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/fuel.json',response.body)
        })
    }) 
})