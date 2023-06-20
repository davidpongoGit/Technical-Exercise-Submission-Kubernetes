class editContactPage {
    headingTitle = {
        checkIsDisplayed : () => cy.get('h1').should('contain', 'Edit Contact'),
    }
    get logout(){
        return cy.get('#logout').click();
    }
    get clickSubmit(){
        return cy.get('#submit').click();
    }
    get clickCancel(){
        return cy.get('#cancel').click();
    }
    amendContactDetails = {
        firstName : (value) => cy.get('#firstName').clear().type(value),
        lastName : (value) => cy.get('#lastName').clear().type(value),
        DOB : (value) => cy.get('#birthdate').clear().type(value),
        email : (value) => cy.get('#email').clear().type(value),
        phone : (value) => cy.get('#phone').clear().type(value),
        StAddress1 : (value) => cy.get('#street1').clear().type(value),
        StAddress2 : (value) => cy.get('#street2').clear().type(value),
        city : (value) => cy.get('#city').clear().type(value),
        stateProvince : (value) => cy.get('#stateProvince').clear().type(value),
        postalCode : (value) => cy.get('#postalCode').clear().type(value),
        country : (value) => cy.get('#country').clear().type(value)
    }
}
module.exports = new editContactPage();