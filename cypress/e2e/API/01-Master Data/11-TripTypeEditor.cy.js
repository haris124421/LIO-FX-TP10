import company_data from "../../../fixtures/api_data/companyData.json"
import businessArea_data from "../../../fixtures/api_data/businessArea.json"
import commonFucntions from "../../../helpers/commonFunctions";
import jwtToken from "../../../fixtures/api_data/loginToken.json"

describe('Trip Type', ()=> {

    it('TC 1.10.1 it should add Trip Type successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BaseURLApi')+'/LIOWebAPI/api/TripTypeEditor',
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
                "TripTypeDetail":{
                    "Id":"",
                    "Name":commonFucntions.generate_random_string(8),
                    "Number1":commonFucntions.getRandomArbitrary(100,1000),
                    "TripTypeConcurrencyValue":"",
                    "Abbreviation":commonFucntions.generate_random_string(5),
                    "UnitId":company_data.UpdatedUnitId,
                    "BusinessAreaId":businessArea_data.UpdatedBusinessAreaId,
                    "Annotation":"",
                    "Color":"#000000",
                    "BackgroundColor":"transparent",
                    "RevisionId":""
                 }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/tripType.json',response.body)
        })
    }) 
})