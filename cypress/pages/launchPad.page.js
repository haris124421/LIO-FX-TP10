import launchPad_locators from "../fixtures/page_locators/launchPad.json"

class launchPad{
    static clickTimetablePlanner(){
        cy.get(launchPad_locators.Tp10_module).click()
    }
}

export default launchPad