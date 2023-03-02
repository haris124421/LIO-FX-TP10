import company_data from "../../../fixtures/api_data/companyData.json"
import businessArea_data from "../../../fixtures/api_data/businessArea.json"
import regionLevel_data from "../../../fixtures/api_data/regionLevel.json"
import commonFucntions from "../../../helpers/commonFunctions";
import login_details from "../../../fixtures/api_data/loginToken.json"

describe('Region', ()=> {

    it('TC 1.13.1 it should add Region successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BASEURL')+'/LIOWebAPI/api/RegionEditor',
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
                "RegionDetail":{
                   "Id":"",
                   "Name":commonFucntions.generate_random_string(8),
                   "RegionConcurrencyValue":"",
                   "Abbreviation":commonFucntions.generate_random_string(5),
                   "BusinessAreaId":businessArea_data.UpdatedBusinessAreaId,
                   "RegionLevelId":regionLevel_data.UpdatedRegionLevelId,
                   "Number":commonFucntions.getRandomArbitrary(100,1000),
                   "Address1":commonFucntions.generate_random_string(10),
                   "Address2":"",
                   "ParentId":"-1",
                   "UnitId":company_data.UpdatedUnitId,
                   "Color":"#b02424",
                   "RevisionId":""
                }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/region.json',response.body)
        })
    }) 
})