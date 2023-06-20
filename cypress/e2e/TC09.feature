@automated @test-case09

  Feature: New user is able to add contact details by clicking on Add Contact Details. The table should be empty beforehand for new users.

    Scenario: Test new user is able to add new contact
      Given New user is located on the Contacts List
      And Contacts List table is empty
      When User clicks on Add a New Contact button
      Then Add Contact page is displayed
      And User is able complete the html form and add a new contact