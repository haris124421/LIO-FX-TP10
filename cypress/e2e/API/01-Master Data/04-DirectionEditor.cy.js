import company_data from "../../../fixtures/api_data/companyData.json"
import commonFucntions from "../../../helpers/commonFunctions";
import login_details from "../../../fixtures/api_data/loginToken.json"

describe('Direction', ()=> {

    it('TC 1.3.1 it should add  direction successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BaseURL')+'/LIOWebAPI/api/DirectionEditor',
            headers : {"Authorization": "Bearer " +login_details.Token},
            body: {
                "UserId":login_details.CompleteObject.User.Id,
                "UserName":login_details.CompleteObject.User.UserName,
                "DataFilter":{
                },
                "ResourcePlanFilter":{
                },
                "OwnerId":company_data.UpdatedUnitId,
                "isFreezeSchedule":false,
                "OrderBy":null,
                "OrderType":null,
                "DirectionDetail":{
                    "Id":"",
                    "Name":commonFucntions.generate_random_string(8),
                    "DirectionConcurrencyValue":"",
                    "Abbreviation":commonFucntions.generate_random_string(5),
                    "Annotation":"",
                    "Number":commonFucntions.getRandomArbitrary(100,1000),
                    "OppositeDirectionId":"-1",
                    "Color":"#b02424",
                    "RootParentId":company_data.UpdatedUnitId,
                    "IsPrimaryDirection":true,
                    "RevisionId":""
                 }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/direction.json',response.body)
        })
    }) 
})