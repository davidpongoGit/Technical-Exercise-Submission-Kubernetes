import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import listOfEmails from "../../fixtures/listOfEmails.json";
import listOfPasswords from "../../fixtures/listOfPasswords.json";
import loginPage from "../../PageObjectModels/loginPage";
import addContactPage from "../../PageObjectModels/addContactPage";
import addUserPage from "../../PageObjectModels/addUserPage";
import contactListPage from "../../PageObjectModels/contactListPage";
import editContactPage from "../../PageObjectModels/editContactPage";
import viewContactDetailsPage from "../../PageObjectModels/viewContactDetailsPage";

Given ('User is located on the new user registration form', () =>{

})

When ('User enters all details', () =>{

})

And ('User enters david.pongo.com instead of david.pongo@email.com', () =>{

})

Then ('Error is message is displayed for email validation upon submitting the html form', () =>{

})