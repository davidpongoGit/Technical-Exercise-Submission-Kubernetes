class loginPage {
    headingTitle = {
        checkIsDisplayed : () => cy.get('h1').should('contain', 'Contact List App'),
    }
    loginHtmlForm = {
        enterEmail : (listOfEmails) => cy.get('#email').type(listOfEmails),
        enterPassword : (listOfPasswords) => cy.get('#password').type(listOfPasswords),
        clickSubmit : () => cy.get('#submit').click()
    }
    otherElements = {
        checkSignUpTextExists : () => cy.get('body > div.main-content > p:nth-child(4)').should('have.text', 'Not yet a user? Click here to sign up!'),
        clickSignUpButton : ()  => cy.get('#signup').click()
    }
}
module.exports = new loginPage();