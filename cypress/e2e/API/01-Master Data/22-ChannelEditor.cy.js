import company_data from "../../../fixtures/api_data/companyData.json"
import commonFucntions from "../../../helpers/commonFunctions";
import login_details from "../../../fixtures/api_data/loginToken.json"

describe('Channel', ()=> {

    it('TC 1.22.1 it should add Channel successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BASEURL')+'/LIOWebAPI/api/ChannelEditor',
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
                "ChannelDetail":{
                    "Id":"",
                    "Name":commonFucntions.generate_random_string(8),
                    "Number":commonFucntions.getRandomArbitrary(100,1000),
                    "ChannelConcurrencyValue":"",
                    "Abbreviation":commonFucntions.generate_random_string(5),
                    "RootParentId":company_data.UpdatedUnitId,
                    "Color":"#000000",
                    "RevisionId":""
                 }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/channel.json',response.body)
        })
    }) 
})