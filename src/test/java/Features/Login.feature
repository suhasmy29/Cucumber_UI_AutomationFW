Feature: Swaglabs website

@Smoke
Scenario: Login validation
Given User is on Swaglabs website loginpage
When user enters username = "standard_user" and Password = "secret_sauce"
Then Home Page is displayed