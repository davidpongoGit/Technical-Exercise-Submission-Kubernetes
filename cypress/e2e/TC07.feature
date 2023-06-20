@automated @test-case07

  Feature: New user account email field has validation for email type. Without entering @ the sign-up should not work

    Scenario: Test email validation on new user registration form
      Given User is located on the new user registration form
      When User enters all details
      And User enters david.pongo.com instead of david.pongo@email.com
      Then Error is message is displayed for email validation upon submitting the html form