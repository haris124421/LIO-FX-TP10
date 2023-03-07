import login_page from "../../../pages/login.page"
import base_page from "../../../pages/base.page"
import company_page from "../../../pages/company.page"

describe('Company', ()=> {

    before('It should login and open timetable planner',()=>{
        login_page.openLoginPage()
        login_page.enterUsername(Cypress.env('USERNAME'))
        login_page.enterPassword(Cypress.env('PASSWORD'))
        login_page.clickLoginBtn()
        login_page.isLoggedIn()
        cy.get('#TimeTable_Planner > .content').click()
        cy.wait(60000)
    })

    it('should open company page and add a new compnay',()=>{
        company_page.openCompanyPage()
        base_page.clickAddNewEditorbtn()
        base_page.clickAddNewOption()
        company_page.enterName()
        company_page.enterAbbr()
        company_page.clickParentCompany()
        company_page.clickSaveBtn()
        company_page.validateCompanyAddition()
    })

})