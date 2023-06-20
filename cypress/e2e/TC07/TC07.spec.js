import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../PageObjectModels/loginPage";
import addUserPage from "../../PageObjectModels/addUserPage";

Given ('User is located on the new user registration form', () =>{
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    loginPage.headingTitle.checkIsDisplayed();
    loginPage.otherElements.clickSignUpButton();
})

When ('User enters all details', () =>{
    addUserPage.headingTitle.checkIsDisplayed();
    addUserPage.signUpHtmlForm.firstName("Michael")
    addUserPage.signUpHtmlForm.lastName("Williams");
    addUserPage.signUpHtmlForm.password("somePassword");
})

And ('User enters david.pongo.com instead of david.pongo@email.com', () =>{
    addUserPage.signUpHtmlForm.email("david.pongo.com");
})

Then ('Error is message is displayed for email validation upon submitting the html form', () =>{
    addUserPage.signUpHtmlForm.clickSubmit();
    cy.contains('User validation failed: email: Email is invalid');
})