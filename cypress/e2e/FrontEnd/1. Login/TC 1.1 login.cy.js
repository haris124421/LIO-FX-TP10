import login_page from "../../../pages/login/login"

describe('Login', ()=> {

    let authToken

    before(()=>{
        cy.visit(Cypress.env('BaseURLWeb'))
        login_page.enterUsername()
        login_page.enterPassword()
        login_page.clickLoginBtn()
        login_page.isLoggedIn()
    })

    it('TC 1.1 it should login successfully with valid credentials', () => {
        cy.getLocalStorage('AuthenticationToken').then((Token)=>{
            cy.log(Token)
            cy.visit('http://192.168.122.191:7585/LIOWebUI/Layouts/TimeTablePlannerLayout.html#/Timetable?TokenId=067f6224-edb6-4301-32a9-31a250bfd112')
        })
        
    })
})