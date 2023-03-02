import company_data from "../../../fixtures/api_data/companyData.json"
import businessArea_data from "../../../fixtures/api_data/businessArea.json"
import commonFucntions from "../../../helpers/commonFunctions";
import login_details from "../../../fixtures/api_data/loginToken.json"

describe('Transportation Mode', ()=> {

    it('TC 1.19.1 it should add Transportation Mode successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BASEURL')+'/LIOWebAPI/api/TransportationModeEditor',
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
                "TransportationModeDetail":{
                    "Id":"",
                    "Name":commonFucntions.generate_random_string(8),
                    "Number":commonFucntions.getRandomArbitrary(100,1000),
                    "TransModeConcurrencyValue":"",
                    "Abbreviation":commonFucntions.generate_random_string(5),
                    "UnitId":company_data.UpdatedUnitId,
                    "BusinessAreaId":businessArea_data.UpdatedBusinessAreaId,
                    "Routes":[
                    ],
                    "Annotation":"",
                    "ModeType":"1",
                    "NeTExTransportModeId":"-1",
                    "NeTExTransportSubModeId":"-1",
                    "TripCount":-1,
                    "Color":"#000000",
                    "RevisionId":""
                 }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/TransMode.json',response.body)
        })
    }) 
})