import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../PageObjectModels/loginPage";
import addUserPage from "../../PageObjectModels/addUserPage";


Given ('User has opened a new user registration', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    loginPage.headingTitle.checkIsDisplayed();
    loginPage.otherElements.clickSignUpButton();
})

When ('User enters details apart from first name', () => {
    addUserPage.headingTitle.checkIsDisplayed();
    //We are purposely not setting first name here
    addUserPage.signUpHtmlForm.lastName("Williams");
    addUserPage.signUpHtmlForm.email("someEmail@test.com");
    addUserPage.signUpHtmlForm.password("somePassword");
    addUserPage.signUpHtmlForm.clickSubmit();
})

Then ('Error is message is displayed for first name', () => {
    cy.contains('User validation failed: firstName: Path `firstName` is required.');
})