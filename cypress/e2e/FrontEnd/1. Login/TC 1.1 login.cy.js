import login_page from "../../../pages/login/login"

describe('Login', ()=> {

    before('login and wait',()=>{
        cy.visit(Cypress.env('BASEURL')+'/Apps/Common/Views/LaunchPad.html')
        login_page.enterUsername(Cypress.env('USERNAME'))
        login_page.enterPassword(Cypress.env('PASSWORD'))
        login_page.clickLoginBtn()
        login_page.isLoggedIn()
        cy.get('#TimeTable_Planner > .content').click()
        cy.wait(20000)
    })

    it('should open company page',()=>{
        cy.visit(Cypress.env('BASEURL')+'/LIOWebUI/Layouts/TimeTablePlannerLayout.html#/CompanyEditor')
        cy.wait(20000)
    })

})