import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import apiToken from "../../fixtures/apiToken.json";

let respCode;
let respBody;
let contactId;
let updatedBody;

Given ('User wants to create a new contact via API', () =>{
//Placeholder
})

When ('POST call is sent with all required new contact details inside the JSON body', () =>{
    cy.api({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
        headers: {
            Authorization: apiToken.myToken,
            Accept: "*/*"
        },
        body:{
            "firstName": "John",
            "lastName": "Doe",
            "birthdate": "1970-01-01",
            "email": "jdoe@fake.com",
            "phone": "8005555555",
            "street1": "1 Main St.",
            "street2": "Apartment A",
            "city": "Anytown",
            "stateProvince": "KS",
            "postalCode": "12345",
            "country": "USA"
        }
    }).then((response) =>{
        cy.then(() => {
            respCode = response.status;
            respBody = response.body;
        })
    })
})
Then ('200 status code response is received', () =>{
    expect(respCode).to.eq(201);
    contactId = respBody['_id'];
})

Given ('User wants to check that the new contact has been created', () =>{
//Placeholder
})

When ('GET call is sent with all expected details inside the JSON body', () =>{
    cy.api({
        method: 'GET',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/'+contactId,
        headers: {
            Authorization: apiToken.myToken,
            Accept: "*/*"
        }
    }).then((response) =>{
        cy.then(() => {
            respCode = response.status;
            respBody = response.body;
        })
    })
})

Then ('200 status code response is received showing contact details have been created', () =>{
    expect(respCode).to.eq(200);
    expect(respBody).not.to.be.null;
    expect(respBody).to.contain({
        "firstName": "John",
        "lastName": "Doe",
        "birthdate": "1970-01-01",
        "email": "jdoe@fake.com",
        "phone": "8005555555",
        "street1": "1 Main St.",
        "street2": "Apartment A",
        "city": "Anytown",
        "stateProvince": "KS",
        "postalCode": "12345",
        "country": "USA"
    })
})

Given ('User wants to update existing contact via API', () =>{
//Placeholder
})

When ('PUT call is sent with all required changes inside the JSON body', () =>{
    updatedBody = {
        "firstName": "Amy",
        "lastName": "Miller",
        "birthdate": "1992-02-02",
        "email": "amiller@fake.com",
        "phone": "8005554242",
        "street1": "13 School St.",
        "street2": "Apt. 5",
        "city": "Washington",
        "stateProvince": "QC",
        "postalCode": "A1A1A1",
        "country": "Canada"
    }
    cy.api({
        method: 'PUT',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/'+contactId,
        headers: {
            Authorization: apiToken.myToken,
            Accept: "*/*"
        },
        body: updatedBody
    }).then((response) =>{
        cy.then(() => {
            respCode = response.status;
            respBody = response.body;
        })
    })
})

Then ('200 status code response is obtained', () =>{
    expect(respCode).to.eq(200);
})

And ('check that all received details are matching our new changes', () =>{
    expect(respBody).to.contain(updatedBody)
})

Given ('User wants to delete existing contact via API', () =>{
//Placeholder
})

When ('DELETE call is sent', () =>{
    cy.api({
        method: 'DELETE',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/'+contactId,
        headers: {
            Authorization: apiToken.myToken,
            Accept: "*/*"
        }
    }).then((response) =>{
        cy.then(() => {
            respCode = response.status;
            respBody = response.body;
        })
    })
})

Then ('200 status code response is received with message "Contact deleted"', () =>{
    expect(respCode).to.eq(200);
    expect(respBody).to.contain("Contact deleted")
})

