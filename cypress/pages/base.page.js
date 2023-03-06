import common_locators from "../fixtures/page_locators/common.json"

export default class basePage {

    static clickAddNewEditorbtn(){
        return cy.get(common_locators.addNewButton).click()
    }

    static clickAddNewOption(){
        return cy.get(common_locators.select_editor_option).click()
    }
}