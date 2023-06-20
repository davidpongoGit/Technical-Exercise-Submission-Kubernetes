class viewContactDetailsPage {
    headingTitle = {
        checkIsDisplayed : () => cy.get('h1').should('contain', 'Contact Details'),
    }
    get logout(){
        return cy.get('#logout').click();
    }
    get clickEditContact(){
        return cy.get('#edit-contact').click();
    }
    get deleteContact(){
        return cy.get('#delete').click();
    }
    get returnToContactList(){
        return cy.get('#return').click();
    }
    checkContactDetails = {
        firstName : (value) => cy.get('#firstName').should('contain', value),
        lastName : (value) => cy.get('#lastName').should('contain', value),
        DOB : (value) => cy.get('#birthdate').should('contain', value),
        email : (value) => cy.get('#email').should('contain', value),
        phone : (value) => cy.get('#phone').should('contain', value),
        StAddress1 : (value) => cy.get('#street1').should('contain', value),
        StAddress2 : (value) => cy.get('#street2').should('contain', value),
        city : (value) => cy.get('#city').should('contain', value),
        stateProvince : (value) => cy.get('#stateProvince').should('contain', value),
        postalCode : (value) => cy.get('#postalCode').should('contain', value),
        country : (value) => cy.get('#country').should('contain', value)
    }
}
module.exports = new viewContactDetailsPage();