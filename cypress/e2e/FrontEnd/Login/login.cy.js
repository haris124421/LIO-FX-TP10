import login_page from "../../../pages/login/login"

describe('Login', ()=> {

    beforeEach(()=>{
        cy.visit(Cypress.env('BaseURLWeb'))
    })

    it('t01 it should login', () => {
        login_page.enterUsername()
        login_page.enterPassword()
        login_page.clickLoginBtn()
        login_page.isLoggedIn()

        cy.visit('http://192.168.122.191:7585/LIOWebUI/Layouts/TimeTablePlannerLayout.html#/Layouts/TimeTablePlannerLayout.html')
        cy.request({
            method : 'GET',
            url: 'http://192.168.122.191:7585/LIOWebUI/Apps/TimeTablePlanner/Scripts/l10n/Data/locales.ini',
        })
        cy.request({
            method : 'GET',
            url: 'http://192.168.122.191:7585/LIOWebUI/Apps/TimeTablePlanner/Scripts/l10n/Data/data.en.properties',
        })
        cy.get('a[href="#/CompanyEditor"]').click()
    })
})