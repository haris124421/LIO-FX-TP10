import company_data from "../../../fixtures/api_data/companyData.json"
import region_data from "../../../fixtures/api_data/region.json"
import commonFucntions from "../../../helpers/commonFunctions";
import login_details from "../../../fixtures/api_data/loginToken.json"

describe('Zone', ()=> {

    it('TC 1.16.1 it should add Zone successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BASEURL')+'/LIOWebAPI/api/Zone',
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
                "ZoneDetail":{
                   "Id":"",
                   "Name":commonFucntions.generate_random_string(8),
                   "Number":commonFucntions.getRandomArbitrary(100,1000),
                   "ZoneConcurrencyValue":"",
                   "Abbreviation":commonFucntions.generate_random_string(5),
                   "Code":commonFucntions.getRandomArbitrary(100,1000),
                   "Type":"",
                   "RegionId":region_data.UpdatedRegionId,
                   "RootParentId":company_data.UpdatedUnitId,
                   "Color":"#b02424",
                   "RevisionId":"",
                }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/zone.json',response.body)
        })
    }) 
})