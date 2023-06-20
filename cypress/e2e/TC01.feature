@manual @test-case01

  Feature: Contact List App loads correctly

    Scenario: Contact List App loads correctly without any issues and all elements are present on the home page
      Given User wants to visit the Contact List App
      When User enters the correct URL <https://thinking-tester-contact-list.herokuapp.com/> into the browser
      Then Contact List App is rendered with all expected elements on web page