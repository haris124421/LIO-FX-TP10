import company_data from "../../../fixtures/api_data/companyData.json"
import businessArea_data from "../../../fixtures/api_data/businessArea.json"
import account_data from "../../../fixtures/api_data/account.json"
import commonFucntions from "../../../helpers/commonFunctions";
import login_details from "../../../fixtures/api_data/loginToken.json"

describe('Contract', ()=> {

    it('TC 1.18.1 it should add Contract successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BASEURL')+'/LIOWebAPI/api/ContractEditor',
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
                "ContractDetail":{
                   "Id":"",
                   "Name":commonFucntions.generate_random_string(8),
                   "Number":commonFucntions.getRandomArbitrary(100,1000),
                   "Abbreviation":commonFucntions.generate_random_string(5),
                   "UnitId":company_data.UpdatedUnitId,
                   "BusinessAreaId":businessArea_data.UpdatedBusinessAreaId,
                   "ContractDetails":[
                    {
                       "AccountId":account_data.UpdatedAccountId,
                       "Percentage":commonFucntions.getRandomArbitrary(100,100),
                       "ContractId":""
                    }
                 ],
                    "ContractConcurrencyValue":"",
                    "RevisionId":"",
                }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/contract.json',response.body)
        })
    }) 
})