import company_locators from "../fixtures/page_locators/company.json"
import commonFucntions from "../helpers/commonFunctions"

class company {

    static enterName(){
        return cy.get(company_locators.compnay_name).type(commonFucntions.generate_random_string(8))
    }

    static enterAbbr(){
        return cy.get(company_locators.company_abbr).type(commonFucntions.generate_random_string(5))
    }
    
    static clickParentCompany(){
        return cy.get(company_locators.parent_company_field).click()

    }
    
    static selectNoneAsParentCompany(){
        return cy.get(company_locators.parent_company_none).click()
    }
    
    static clickSaveBtn(){
        return cy.get(company_locators.save_btn).click()
    }
    
    static validateCompanyAddition(){
        cy.get(company_locators.save_message_dialogue).should('have.text','Company has been saved successfully')
    }

    static openCompanyPage(){
        return cy.visit(Cypress.env('BASEURL')+'/LIOWebUI/Layouts/TimeTablePlannerLayout.html#/CompanyEditor')
    }


}

export default company