import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given ('User wants to create a new contact via API', () =>{

})

When ('POST call is sent with all required new contact details inside the JSON body', () =>{

})

Then ('200 status code response is received', () =>{

})

Given ('User wants to check that the new contact has been created', () =>{

})

When ('GET call is sent with all expected details inside the JSON body', () =>{

})

Then ('200 status code response is received showing all contact details', () =>{

})

Given ('User wants to update existing contact via API', () =>{

})

When ('PUT call is sent with all required changes inside the JSON body', () =>{

})

Then ('200 status code response is obtained', () =>{

})

And ('GET call is sent to check that all received details are matching our new changes', () =>{

})

Given ('User wants to delete existing contact via API', () =>{

})

When ('DELETE call is sent', () =>{

})

Then ('200 status code response is received with message "Contact deleted"', () =>{

})

