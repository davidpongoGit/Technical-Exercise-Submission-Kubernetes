class addUserPage {
    headingTitle = {
        checkIsDisplayed : () => cy.get('h1').should('contain', 'Add User'),
    }
    signUpHtmlForm = {
        firstName : () => cy.get('#firstName'),
        lastName : () => cy.get('#lastName'),
        email : (listOfEmails) => cy.get(listOfEmails),
        password : (listOfPasswords) => cy.get(listOfPasswords),
        clickSubmit : () => cy.get('#submit'),
        clickCancel : () => cy.get('#cancel')
    }
}
module.exports = new addUserPage();