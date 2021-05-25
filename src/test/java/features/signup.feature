@tag
Feature: eLearning Signup

  @tag1
  Scenario Outline: Validate eLearning Signup
    Given User access to eLearning HomePage
    When User navigates to eLearning HomePage
    And User Clicks on Signup button
    Then Registration page is opened
    When user fills all the mandatory values "<firstname>","<lastname>","<email>","<username>","<pass>","<confirmpwd>"
    And User clicks on Register button
    Then User Registration should successful and display Welcome Message with "<firstname>"
    When User clicks on homepage
    And Clicks on Compose
    And enters receipient address, subject and message "<receipient>", "<subject>", "<message>"
    And Clicks on Send Message button
    Then Mail is sent successfully and a Confirmation of mail sent to "<receipient>" is displayed

    Examples: 
      | firstname | lastname | email                | username  | pass          | confirmpwd    | receipient | subject   | message       |
      | text1     | test2    | testmail23@email.com | Assigment | maymonth12345 | maymonth12345 | next       | Test Mail | Welcome       |
