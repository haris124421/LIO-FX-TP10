import login_page from "../../../pages/login/login"

describe('Login', ()=> {

    beforeEach(()=>{
        cy.visit(Cypress.env('BaseURLWeb'))
    })

    it('TC 1.1 it should login successfully with valid credentials', () => {
        login_page.enterUsername()
        login_page.enterPassword()
        login_page.clickLoginBtn()
        login_page.isLoggedIn()
    })
})