class addContactPage {
    headingTitle = {
        checkIsDisplayed : () => cy.get('h1').should('contain', 'Add Contact'),
    }
    contactHtmlForm = {
        firstName : (value) => cy.get('#firstName').type(value),
        lastName : (value) => cy.get('#lastName').type(value),
        DOB : (value) => cy.get('#birthdate').type(value),
        email : (value) => cy.get('#email').type(value),
        phone : (value) => cy.get('#phone').type(value),
        StAddress1 : (value) => cy.get('#street1').type(value),
        StAddress2 : (value) => cy.get('#street2').type(value),
        city : (value) => cy.get('#city').type(value),
        stateProvince : (value) => cy.get('#stateProvince').type(value),
        postalCode : (value) => cy.get('#postalCode').type(value),
        country : (value) => cy.get('#country').type(value),
        clickSubmit : () => cy.get('#submit').click(),
        clickCancel : () => cy.get('#cancel').click(),
        logout : () => cy.get('#logout').click()
    }
}
module.exports = new addContactPage();