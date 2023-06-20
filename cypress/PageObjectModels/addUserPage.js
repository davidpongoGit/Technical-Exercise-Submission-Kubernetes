class addUserPage {
    headingTitle = {
        checkIsDisplayed : () => cy.get('h1').should('contain', 'Add User'),
    }
    signUpHtmlForm = {
        firstName : (value) => cy.get('#firstName').type(value),
        lastName : (value) => cy.get('#lastName').type(value),
        email : (value) => cy.get('#email').type(value),
        password : (value) => cy.get('#password').type(value),
        clickSubmit : () => cy.get('#submit').click(),
        clickCancel : () => cy.get('#cancel').click()
    }
}
module.exports = new addUserPage();