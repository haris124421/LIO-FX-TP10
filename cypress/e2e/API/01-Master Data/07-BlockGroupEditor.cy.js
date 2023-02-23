import company_data from "../../../fixtures/api_data/companyData.json"
import scope_data from "../../../fixtures/api_data/scope.json"
import businessArea_data from "../../../fixtures/api_data/businessArea.json"
import commonFucntions from "../../../helpers/commonFunctions";
import jwtToken from "../../../fixtures/api_data/loginToken.json"

describe('Block Group', ()=> {

    it('TC 1.6.1 it should add Block Group successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BaseURLApi')+'/LIOWebAPI/api/BlockGroupEditor',
            headers : {"Authorization": "Bearer " +jwtToken.Token},
            body: {
                "UserId": Cypress.env('UserId'),
                "UserName":Cypress.env('UserName'),
                "DataFilter":{
                    "ApplyFilterOnScreens":0,
                    "CompanyIds":[
                        230213084029551
                    ],
                    "BusinessAreaIds":[
                        
                    ],
                    "ScheduleIds":[
                        
                    ],
                    "PeriodIds":[
                        
                    ],
                    "ContractIds":[
                        
                    ],
                    "RouteIds":[
                        
                    ],
                    "RouteVersionIds":[
                        
                    ],
                    "GeoNodeIds":[
                        
                    ],
                    "LinkIds":[
                        
                    ],
                    "AnnouncementIds":[
                        
                    ],
                    "DestinationIds":[
                        
                    ],
                    "DirectionIds":[
                        
                    ],
                    "GlobalScheduleIds":[
                        
                    ],
                    "ScopeIds":[
                        
                    ],
                    "DistrictIds":[
                        
                    ],
                    "AllowanceIds":[
                        
                    ],
                    "QualificationIds":[
                        
                    ],
                    "ContentTypeIds":[
                        
                    ],
                    "TripTypeIds":[
                        
                    ],
                    "RegionIds":[
                        
                    ],
                    "TripIds":[
                        
                    ],
                    "RouteCategoryIds":[
                        
                    ],
                    "VehicleTypeIds":[
                        
                    ],
                    "VehicleTypeGroupIds":[
                        
                    ],
                    "RevisionIds":[
                        
                    ],
                    "SpecialFlags":{
                        
                    },
                    "GlobalFilterPerUserId":230206072920387
                },
                "ResourcePlanFilter":{
                },
                "OwnerId":company_data.UpdatedUnitId,
                "isFreezeSchedule":false,
                "OrderBy":null,
                "OrderType":null,
                "BlockGroupDetail":{
                    "Id":"",
                    "Name":commonFucntions.generate_random_string(8),
                    "Number":commonFucntions.getRandomArbitrary(100,1000),
                    "BlockGroupConcurrencyValue":"",
                    "Abbreviation":commonFucntions.generate_random_string(5),
                    "Annotation":"",
                    "UnitId":company_data.UpdatedUnitId,
                    "BusinessAreaId":businessArea_data.UpdatedBusinessAreaId,
                    "ScopeId":scope_data.UpdatedScopeId,
                    "Color":"#b02424",
                    "RevisionId":""
                 }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/blockGroup.json',response.body)
        })
    }) 
})