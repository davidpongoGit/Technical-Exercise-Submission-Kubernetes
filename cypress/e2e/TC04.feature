@automated @test-case04

  Feature: Entering an incorrect email or password for existing user will display an error message

    Background: New user is created prior to test both valid and invalid paths

    Scenario: Test login page with invalid credentials
      Given User has opened the login page of Contact List App
      When Correct email is entered
      And Incorrect password is entered
      Then Error message is displayed