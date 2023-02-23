import company_data from "../../../fixtures/api_data/companyData.json"
import businessArea_data from "../../../fixtures/api_data/businessArea.json"
import commonFucntions from "../../../helpers/commonFunctions";
import jwtToken from "../../../fixtures/api_data/loginToken.json"

describe('District', ()=> {

    it('TC 1.7.1 it should add District successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BaseURLApi')+'/LIOWebAPI/api/DistrictEditor',
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
                "DistrictDetail":{
                    "Id":"",
                    "Name":commonFucntions.generate_random_string(8),
                    "DistrictConcurrencyValue":"",
                    "Abbreviation":commonFucntions.generate_random_string(5),
                    "CostLocation":"",
                    "UnitId":company_data.UpdatedUnitId,
                    "BusinessAreaId":businessArea_data.UpdatedBusinessAreaId,
                    "RevisionId":"",
                    "Color":"#b02424"
                 }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/district.json',response.body)
        })
    }) 
})