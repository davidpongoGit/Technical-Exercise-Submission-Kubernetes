@automated @test-case06

  Feature: New user account registration form requires all mandatory fields to be completed, otherwise an error message is displayed

    Scenario: Test that all required fields must be filled in before creating a new user
      Given User has opened a new user registration
      When User enters details apart from first name
      Then Error is message is displayed for first name