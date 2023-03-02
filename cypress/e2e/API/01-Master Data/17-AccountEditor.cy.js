import company_data from "../../../fixtures/api_data/companyData.json"
import businessArea_data from "../../../fixtures/api_data/businessArea.json"
import district_data from "../../../fixtures/api_data/district.json"
import commonFucntions from "../../../helpers/commonFunctions";
import login_details from "../../../fixtures/api_data/loginToken.json"

describe('Account', ()=> {

    it('TC 1.17.1 it should add Account successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BASEURL')+'/LIOWebAPI/api/AccountEditor',
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
                "AccountDetail":{
                   "Id":"",
                   "Name":commonFucntions.generate_random_string(8),
                   "Number1":commonFucntions.getRandomArbitrary(100,1000),
                   "Abbreviation":commonFucntions.generate_random_string(5),
                   "Description":"",
                   "AccountLevel":commonFucntions.getRandomArbitrary(1,10),
                   "Branch":"",
                   "ValidFrom":"Sun Jan 01 2023",
                   "ValidTo":"Sun Dec 31 2023",
                   "ExternalId":"",
                   "UnitId":company_data.UpdatedUnitId,
                   "BusinessAreas":[
                    businessArea_data.UpdatedBusinessAreaId
                 ],
                 "Districts":[
                    district_data.UpdatedDistrictId
                 ],
                   "AccountConcurrencyValue":"",
                   "RevisionId":"",
                }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/account.json',response.body)
        })
    }) 
})