import company_data from "../../../../fixtures/api_data/companyData.json"
import scope_data from "../../../../fixtures/api_data/scope.json"
import commonFucntions from "../../../../helpers/commonFunctions";
import jwtToken from "../../../../fixtures/api_data/loginToken.json"

describe('Content Type', ()=> {

    it('should add Content Type', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BaseURLApi')+'/LIOWebAPI/api/TaskTypeEditor',
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