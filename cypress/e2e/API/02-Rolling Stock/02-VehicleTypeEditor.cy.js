import company_data from "../../../fixtures/api_data/companyData.json"
import businessArea_data from "../../../fixtures/api_data/businessArea.json"
import fuel_data from "../../../fixtures/api_data/fuel.json";
import commonFucntions from "../../../helpers/commonFunctions";
import login_details from "../../../fixtures/api_data/loginToken.json"

describe('Vehicle Type Editor', ()=> {

    let emission_data


    before('get fuel emission data', () =>{
        cy.request({
            method : 'POST',
            url: Cypress.env('BASEURL')+'/LIOWebAPI/api/VehicleTypeEditor/GetFuelAndEmissionData',
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
                "CompanyId":company_data.UpdatedUnitId
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            emission_data = response.body.EntityDDEmissionData[1].Id
            console.log(emission_data)
        })

    })
    it('TC 2.2.1 it should add Vehicle Type successfully', () => {
        console.log(emission_data)
        cy.request({
            method : 'PUT',
            url: Cypress.env('BASEURL')+'/LIOWebAPI/api/VehicleTypeEditor',
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
                "VehicleTypeDetail":{
                    "Id":"",
                    "VehicleTypeConcurrencyValue":"",
                    "Name":commonFucntions.generate_random_string(8),
                    "Abbreviation":commonFucntions.generate_random_string(5),
                    "Annotation":"",
                    "FuelCapacity":"",
                    "Number":commonFucntions.getRandomArbitrary(100,1000),
                    "TotalLength":commonFucntions.getRandomArbitrary(1,50),
                    "SeatingCapacity2":commonFucntions.getRandomArbitrary(1,50),
                    "SpecialSeatsCapacity1":commonFucntions.getRandomArbitrary(1,50),
                    "SpecialSeatsCapacity2":commonFucntions.getRandomArbitrary(1,50),
                    "StandingCapacity1":commonFucntions.getRandomArbitrary(1,50),
                    "StandingCapacity2":commonFucntions.getRandomArbitrary(1,50),
                    "SeatingCapacity1":commonFucntions.getRandomArbitrary(1,50),
                    "UnitId":company_data.UpdatedUnitId,
                    "BusinessAreaId":businessArea_data.UpdatedBusinessAreaId,
                    "TotalWidth":null,
                    "FuelId":fuel_data.UpdatedFuelId,
                    "EmissionId":emission_data,
                    "VehicleStandardIds":[
                       
                    ],
                    "FuelConsumptionInfoDetail":"",
                    "RevisionId":""
                 }
             }
        }).then( (response) =>{
            expect(`Response.status = ${response.body.OperationStatus.HttpStatusCode}`).to.eq('Response.status = 200')
            cy.writeFile('cypress/fixtures/api_data/vehicleType.json',response.body)
        })
    }) 
})