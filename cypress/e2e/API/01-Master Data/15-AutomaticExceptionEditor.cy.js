import company_data from "../../../fixtures/api_data/companyData.json"
import commonFucntions from "../../../helpers/commonFunctions";
import login_details from "../../../fixtures/api_data/loginToken.json"

describe('Automatic Exception', ()=> {

    it('TC 1.15.1 it should add Automatic exception successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BASEURL')+'/LIOWebAPI/api/AutomaticExceptionEditor',
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
                "AutomaticExceptionDetail":{
                   "Id":"",
                   "Name":commonFucntions.generate_random_string(8),
                   "AutomaticExcepConcurrencyValue":"",
                   "Abbreviation":commonFucntions.generate_random_string(5),
                   "IncludedDaysPrefix":"",
                   "ExcludedDaysPrefix":"",
                   "IncludedDaysSuffix":"",
                   "ExcludedDaysSuffix":"",
                   "AutomaticExceptionDateFormatId":"1001701261051000",
                   "AttributeCategoryIds":[
                    230302085333503
                ],
                   "Number":commonFucntions.getRandomArbitrary(100,1000),
                   "IsActive":true,
                   "RootParentId":company_data.UpdatedUnitId,
                   "RevisionId":""
                }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/automaticException.json',response.body)
        })
    }) 
})