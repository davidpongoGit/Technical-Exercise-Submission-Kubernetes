@automated @test-case05

  Feature: Existing user account is able to log in successfully

    Scenario: Test login page with valid credentials for an existing user
      Given User has opened the login page of Contact List App
      When Correct email is entered
      And Correct password is entered
      Then User is logged in