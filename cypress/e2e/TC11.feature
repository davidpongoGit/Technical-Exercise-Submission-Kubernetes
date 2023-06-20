@api-automated @test-case11

  Feature: Ensure that we can add, update, get and delete contacts using API Testing

    Background: Cypress-api-plugin has been used to create a Postman-like GUI which also replaces the cy.intercept and provides same automation facility for API testing.

      Scenario: POST new contact
        Given User wants to create a new contact via API
        When POST call is sent with all required new contact details inside the JSON body
        Then 200 status code response is received

      Scenario: GET newly created contact as per the expected payload
        Given User wants to check that the new contact has been created
        When GET call is sent with all expected details inside the JSON body
        Then 200 status code response is received showing contact details have been created

      Scenario: UPDATE existing contact
        Given User wants to update existing contact via API
        When PUT call is sent with all required changes inside the JSON body
        Then 200 status code response is obtained
        And check that all received details are matching our new changes

      Scenario: DELETE existing contact
        Given User wants to delete existing contact via API
        When DELETE call is sent
        Then 200 status code response is received with message "Contact deleted"