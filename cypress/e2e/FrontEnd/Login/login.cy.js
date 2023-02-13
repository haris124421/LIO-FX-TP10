import login_page from "../../../pages/login/login"
import launchPad_page from "../../../pages/launchPad/launchPad"

describe('Login', ()=> {

    //let authCookie

    beforeEach(()=>{
        cy.visit(Cypress.env('BaseURLWeb'))
    })

    it('t01 it should login', () => {
        login_page.enterUsername()
        login_page.enterPassword()
        login_page.clickLoginBtn()
        login_page.isLoggedIn()
        // cy.visit('http://192.168.122.191:7585/LIOWebUI/Layouts/TimeTablePlannerLayout.html#/Timetable?TokenId=2bec3cac-8801-4e13-89e3-4e7d857483f4')
        // cy.get('.fa.fa-pencil-alt.fa-lg').click()
    })
})