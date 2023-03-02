import company_data from "../../../fixtures/api_data/companyData.json"
import commonFucntions from "../../../helpers/commonFunctions";
import login_details from "../../../fixtures/api_data/loginToken.json"

describe('Activation Point Type', ()=> {

    it('TC 1.20.1 it should add Activation Point Type successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BASEURL')+'/LIOWebAPI/api/ActivationPointTypeEditor',
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
                "ActivationPointTypeDetail":{
                    "Id":"",
                    "Name":commonFucntions.generate_random_string(8),
                    "Number":commonFucntions.getRandomArbitrary(100,1000),
                    "ACTPointTypeConcurrencyValue":"",
                    "Abbreviation":commonFucntions.generate_random_string(5),
                    "RootParentId":company_data.UpdatedUnitId,
                    "Color":"#000000",
                    "ACTPointTypeCategoryId":"-1",
                    "RevisionId":""
                 }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/activationPointType.json',response.body)
        })
    }) 
})