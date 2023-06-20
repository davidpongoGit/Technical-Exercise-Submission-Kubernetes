import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../PageObjectModels/loginPage";
import addUserPage from "../../PageObjectModels/addUserPage";
import contactListPage from "../../PageObjectModels/contactListPage";

Given ('User is located on the new user registration', () =>{
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    loginPage.headingTitle.checkIsDisplayed();
    loginPage.otherElements.clickSignUpButton();
})

When ('User fills all required details correctly', () =>{
    addUserPage.headingTitle.checkIsDisplayed();
    addUserPage.signUpHtmlForm.firstName("Michael");
    addUserPage.signUpHtmlForm.lastName("Williams");
    addUserPage.signUpHtmlForm.email("michael.williams@testing.com");
    addUserPage.signUpHtmlForm.password("password2023");
})

And ('Submits the HTML form', () =>{
    addUserPage.signUpHtmlForm.clickSubmit();
})

Then ('User is created and taken to Contacts List Page', () =>{
    contactListPage.headingTitle.checkIsDisplayed();
})