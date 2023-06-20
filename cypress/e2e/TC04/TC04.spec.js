import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import listOfEmails from "../../fixtures/listOfEmails.json";
import listOfPasswords from "../../fixtures/listOfPasswords.json";
import loginPage from "../../PageObjectModels/loginPage";

Given ('User has opened the login page of Contact List App', () =>{
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
})

When ('Correct email is entered', () =>{
    loginPage.headingTitle.checkIsDisplayed();
    loginPage.loginHtmlForm.enterEmail(listOfEmails.validEmail);
})

And ('Incorrect password is entered', () =>{
    loginPage.loginHtmlForm.enterPassword(listOfPasswords.invalidPassword);
})

Then ('Error message is displayed', () =>{
    loginPage.loginHtmlForm.clickSubmit();
    cy.contains('Incorrect username or password');
})
