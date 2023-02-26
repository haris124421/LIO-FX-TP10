import company_data from "../../../fixtures/api_data/companyData.json"
import commonFucntions from "../../../helpers/commonFunctions";
import login_details from "../../../fixtures/api_data/loginToken.json"

describe('Business Area', ()=> {

    it('TC 1.2.1 it should add business area successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BASEURL')+'/LIOWebAPI/api/BusinessAreaEditor',
            headers : {"Authorization": "Bearer " + login_details.Token},
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
                "BusinessAreaDetail":{
                   "Id":"",
                   "Name":commonFucntions.generate_random_string(8),
                   "BusinessAreaConcurrencyValue":"",
                   "Abbreviation":commonFucntions.generate_random_string(5),
                   "Annotation":"",
                   "Number":commonFucntions.getRandomArbitrary(100,1000),
                   "UnitId":company_data.UpdatedUnitId,
                   "Color":"#b02424",
                   "RevisionId":""
                }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/businessArea.json',response.body)
        })
    }) 
})