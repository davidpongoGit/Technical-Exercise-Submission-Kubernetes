@automated @test-case08

  Feature: Test valid new user creation. Entering all correct details on the signup page allows users to sign up to create a new account

    Scenario: Test valid new user creation path
      Given User is located on the new user registration
      When User fills all required details correctly
      And Submits the HTML form
      Then User is created and taken to Contacts List Page