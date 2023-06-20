import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import listOfEmails from "../../fixtures/listOfEmails.json";
import listOfPasswords from "../../fixtures/listOfPasswords.json";
import loginPage from "../../PageObjectModels/loginPage";
import contactListPage from "../../PageObjectModels/contactListPage";

Given ('User has opened login page of Contact List App', () =>{
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    loginPage.headingTitle.checkIsDisplayed();
})

When ('Correct email is entered into the input email field', () =>{
    loginPage.loginHtmlForm.enterEmail(listOfEmails.validEmail);
})

And ('Correct password is entered', () =>{
    loginPage.loginHtmlForm.enterPassword(listOfPasswords.validPassword);
})

Then ('User is logged in', () =>{
    loginPage.loginHtmlForm.clickSubmit();
    contactListPage.headingTitle.checkIsDisplayed();
})