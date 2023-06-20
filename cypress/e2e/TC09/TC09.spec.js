import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import listOfEmails from "../../fixtures/listOfEmails.json";
import listOfPasswords from "../../fixtures/listOfPasswords.json";
import loginPage from "../../PageObjectModels/loginPage";
import addContactPage from "../../PageObjectModels/addContactPage";
import addUserPage from "../../PageObjectModels/addUserPage";
import contactListPage from "../../PageObjectModels/contactListPage";
import editContactPage from "../../PageObjectModels/editContactPage";
import viewContactDetailsPage from "../../PageObjectModels/viewContactDetailsPage";

Given ('New user is located on the Contacts List', () =>{
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    loginPage.headingTitle.checkIsDisplayed();
    loginPage.loginHtmlForm.enterEmail(listOfEmails.validEmail);
    loginPage.loginHtmlForm.enterPassword(listOfPasswords.validPassword);
    loginPage.loginHtmlForm.clickSubmit();
    contactListPage.headingTitle.checkIsDisplayed();
})

And ('Contacts List table is empty', () =>{
    contactListPage.checkTableIsEmpty;
})

When ('User clicks on Add a New Contact button', () =>{
    contactListPage.addNewContact;
})

Then ('Add Contact page is displayed', () =>{
    addContactPage.headingTitle.checkIsDisplayed();
})

And ('User is able complete the html form and add a new contact', () =>{
    addContactPage.contactHtmlForm.firstName("Joe");
    addContactPage.contactHtmlForm.lastName("Doe");
    addContactPage.contactHtmlForm.DOB("1995-01-01");
    addContactPage.contactHtmlForm.phone("079456123");
    addContactPage.contactHtmlForm.StAddress1("Madeup Address");
    addContactPage.contactHtmlForm.city("Toronto");
    addContactPage.contactHtmlForm.stateProvince("Ontario");
    addContactPage.contactHtmlForm.postalCode("M3H 2IH");
    addContactPage.contactHtmlForm.country("Canada");
    addContactPage.contactHtmlForm.clickSubmit();
    contactListPage.headingTitle.checkIsDisplayed();
    contactListPage.nameColumn.firstRow("Joe Doe");
    //We will now delete the contact because we want to ensure this test can be re-used
    contactListPage.viewFirstContact;
    viewContactDetailsPage.headingTitle.checkIsDisplayed();
    viewContactDetailsPage.deleteContact;
    contactListPage.headingTitle.checkIsDisplayed()
    contactListPage.checkTableIsEmpty;
})