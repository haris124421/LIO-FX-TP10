import company_data from "../../../fixtures/api_data/companyData.json"
import businessArea_data from "../../../fixtures/api_data/businessArea.json"
import commonFucntions from "../../../helpers/commonFunctions";
import jwtToken from "../../../fixtures/api_data/loginToken.json"

describe('Allowance', ()=> {

    it('TC 1.8.1 it should add Allowance successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BaseURLApi')+'/LIOWebAPI/api/AllowanceEditor',
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
                "AllowanceDetail":{
                    "Id":"",
                    "Name":commonFucntions.generate_random_string(8),
                    "AllowanceConcurrencyValue":"",
                    "Abbreviation":commonFucntions.generate_random_string(5),
                    "Type":commonFucntions.getRandomArbitrary(1,4),
                    "UnitId":company_data.UpdatedUnitId,
                    "BusinessAreaId":businessArea_data.UpdatedBusinessAreaId,
                    "Color":"#b02424",
                    "RevisionId":""
                 }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/allowance.json',response.body)
        })
    }) 
})