@automated @test-case10

  Feature: Test that new contact details have validation in force for birthday and postcode

    Scenario: Validate email field for new contact details
      Given User is on Add Contact Details page
      When User enters invalid email
      And Enters rest of the details correctly
      Then Error message is displayed for invalid email validation

    Scenario: Validate post code field for new contact details
      Given User is on the Add Contact Details page
      When User enters invalid post code variation
      And Enters rest of the details as expected
      Then Error message is displayed for invalid post code validation