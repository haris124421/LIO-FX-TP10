describe('Get Calendar Settings', ()=> {

    it('should get validities', () => {
        cy.request({
            method : 'GET',
            url: Cypress.env('BaseURLApi')+'/Validities',
        }).then( (response) =>{
            expect(`Response.status = ${response.status}`).to.eq('Response.status = 200')
        })
    }) 
})