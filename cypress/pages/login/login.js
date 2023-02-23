import login_locators from "../../fixtures/page_locators/login.json"
import launchPad_locators from "../../fixtures/page_locators/launchPad.json"


class login{

    static enterUsername(){
        cy.get(login_locators.username_field).type(Cypress.env('USERNAME'))
    }

    static enterPassword(){
        cy.get(login_locators.password_field).type(Cypress.env('PASSWORD'))
    }

    static clickLoginBtn(){
        cy.get(login_locators.login_button).click()
    }

    static isLoggedIn(){
        cy.get(launchPad_locators.Tp10_module).should('be.visible')
    }

}

export default login