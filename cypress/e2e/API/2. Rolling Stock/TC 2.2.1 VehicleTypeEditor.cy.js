import company_data from "../../../fixtures/api_data/companyData.json"
import businessArea_data from "../../../fixtures/api_data/businessArea.json"
import fuel_data from "../../../fixtures/api_data/fuel.json";
import commonFucntions from "../../../helpers/commonFunctions";
import jwtToken from "../../../fixtures/api_data/loginToken.json"

describe('Vehicle Type Editor', ()=> {

    it('TC 2.1.1 it should add Fuel successfully', () => {
        cy.request({
            method : 'PUT',
            url: Cypress.env('BaseURLApi')+'/LIOWebAPI/api/VehicleTypeEditor',
            headers : {"Authorization": "Bearer " + jwtToken.Token},
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
                    "EmissionId":"230214091048018",
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