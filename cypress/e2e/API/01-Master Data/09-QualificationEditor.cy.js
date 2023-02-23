import company_data from "../../../fixtures/api_data/companyData.json"
import businessArea_data from "../../../fixtures/api_data/businessArea.json"
import commonFucntions from "../../../helpers/commonFunctions";
import jwtToken from "../../../fixtures/api_data/loginToken.json"

describe('Qualification', ()=> {

    it('TC 1.8.1 it should add Qualification successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BaseURLApi')+'/LIOWebAPI/api/QualificationEditor',
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
                "QualificationDetail":{
                    "Id":"",
                    "Name":commonFucntions.generate_random_string(8),
                    "QualificationConcurrencyValue":"",
                    "Abbreviation":commonFucntions.generate_random_string(5),
                    "UnitId":company_data.UpdatedUnitId,
                    "BusinessAreaId":businessArea_data.UpdatedBusinessAreaId,
                    "Color":"#b02424",
                    "RevisionId":""
                 }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/qualification.json',response.body)
        })
    }) 
})