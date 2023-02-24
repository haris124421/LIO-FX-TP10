import login_page from "../../../pages/login/login"

describe('Login', ()=> {

    before(()=>{
        cy.visit(Cypress.env('BaseURL')+'/Apps/Common/Views/LaunchPad.html')
    })

    it('should login successfully with valid credentials',()=>{
        login_page.enterUsername(Cypress.env('USERNAME'))
        login_page.enterPassword(Cypress.env('PASSWORD'))
        login_page.clickLoginBtn()
        login_page.isLoggedIn()
    })

})