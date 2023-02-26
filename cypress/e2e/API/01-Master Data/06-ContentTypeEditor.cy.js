import company_data from "../../../fixtures/api_data/companyData.json"
import scope_data from "../../../fixtures/api_data/scope.json"
import commonFucntions from "../../../helpers/commonFunctions";
import login_details from "../../../fixtures/api_data/loginToken.json"

describe('Content Type', ()=> {

    it('TC 1.5.1 it should add Content Type successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BASEURL')+'/LIOWebAPI/api/TaskTypeEditor',
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
                "TaskTypeDetail":{
                    "Id":"",
                    "TaskTypeConcurrencyValue":"",
                    "Name":commonFucntions.generate_random_string(8),
                    "Abbreviation":commonFucntions.generate_random_string(5),
                    "Annotation":"",
                    "RootParentId":company_data.UpdatedUnitId,
                    "IsWorkTime":false,
                    "IsEffectiveWorkTime":false,
                    "IsRevenue":false,
                    "IsDriveTime":false,
                    "IsBreakTime":false,
                    "IsPaid":true,
                    "UseInBlock":true,
                    "UseInDuty":true,
                    "PublishedIn":"",
                    "ScopeId":scope_data.UpdatedScopeId,
                    "Color":"#b02424",
                    "MetaType":"6",
                    "MinTime":"00:00:00",
                    "MaxTime":"36:00:00",
                    "IsSplittingResource":false,
                    "WorkTimePercentage":"",
                    "EffectiveWorkTimePercentage":"",
                    "RevenueTimePercentage":"",
                    "DriveTimePercentage":"",
                    "BreakTimePercentage":"",
                    "PaidTimePercentage":"100",
                    "RevisionId":""
                 }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/contentType.json',response.body)
        })
    }) 
})