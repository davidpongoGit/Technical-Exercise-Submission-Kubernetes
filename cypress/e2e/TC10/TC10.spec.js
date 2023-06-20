import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import listOfEmails from "../../fixtures/listOfEmails.json";
import listOfPasswords from "../../fixtures/listOfPasswords.json";
import loginPage from "../../PageObjectModels/loginPage";
import addContactPage from "../../PageObjectModels/addContactPage";
import addUserPage from "../../PageObjectModels/addUserPage";
import contactListPage from "../../PageObjectModels/contactListPage";
import editContactPage from "../../PageObjectModels/editContactPage";
import viewContactDetailsPage from "../../PageObjectModels/viewContactDetailsPage";

afterEach('Logout and reload between each scenario', () =>{
    addContactPage.contactHtmlForm.logout();
    cy.reload();
})

Given ('User is on Add Contact Details page', () =>{
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    loginPage.headingTitle.checkIsDisplayed();
    loginPage.loginHtmlForm.enterEmail(listOfEmails.validEmail);
    loginPage.loginHtmlForm.enterPassword(listOfPasswords.validPassword);
    loginPage.loginHtmlForm.clickSubmit();
    contactListPage.headingTitle.checkIsDisplayed();
    contactListPage.checkTableIsEmpty;
    contactListPage.addNewContact;
    addContactPage.headingTitle.checkIsDisplayed();
})

When ('User enters wrong format email', () =>{
    addContactPage.contactHtmlForm.email("joedoe.test.com") //Incorrect email format. Missing @ sign.
})

And ('Enters rest of the details correctly', () =>{
    addContactPage.contactHtmlForm.firstName("Joe");
    addContactPage.contactHtmlForm.lastName("Doe");
    addContactPage.contactHtmlForm.DOB("1995-01-01");
    addContactPage.contactHtmlForm.phone("079456123");
    addContactPage.contactHtmlForm.StAddress1("Madeup Address");
    addContactPage.contactHtmlForm.city("Toronto");
    addContactPage.contactHtmlForm.stateProvince("Ontario");
    addContactPage.contactHtmlForm.postalCode("M3H 2IH");
    addContactPage.contactHtmlForm.country("Canada");
})

Then ('Error message is displayed for invalid email validation', () =>{
    addContactPage.contactHtmlForm.clickSubmit();
    cy.contains('Contact validation failed: email: Email is invalid');
})

Given ('User is on the Add Contact Details page', () =>{
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    loginPage.headingTitle.checkIsDisplayed();
    loginPage.loginHtmlForm.enterEmail(listOfEmails.validEmail);
    loginPage.loginHtmlForm.enterPassword(listOfPasswords.validPassword);
    loginPage.loginHtmlForm.clickSubmit();
    contactListPage.headingTitle.checkIsDisplayed();
    contactListPage.checkTableIsEmpty;
    contactListPage.addNewContact;
    addContactPage.headingTitle.checkIsDisplayed();
})

When ('User enters wrong format post code', () =>{
    addContactPage.contactHtmlForm.postalCode("234 TE") //Incorrect email format. Missing @ sign.
})

And ('Enters rest of the details as expected', () =>{
    addContactPage.contactHtmlForm.firstName("Joe");
    addContactPage.contactHtmlForm.lastName("Doe");
    addContactPage.contactHtmlForm.DOB("1995-01-01");
    addContactPage.contactHtmlForm.phone("079456123");
    addContactPage.contactHtmlForm.email("joe.doe@test.com")
    addContactPage.contactHtmlForm.StAddress1("Madeup Address");
    addContactPage.contactHtmlForm.city("Toronto");
    addContactPage.contactHtmlForm.stateProvince("Ontario");
    addContactPage.contactHtmlForm.country("Canada");
})

Then ('Error message is displayed for invalid post code validation', () =>{
    addContactPage.contactHtmlForm.clickSubmit();
    cy.contains('Contact validation failed: postalCode: Postal code is invalid');
})