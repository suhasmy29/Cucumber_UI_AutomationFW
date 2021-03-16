Feature: Swaglabs website

@Smoke
Scenario: Login validation
Given User is on Swaglabs website loginpage
When user enters username = "standard_user" and Password = "secret_sauce"
Then Home Page is displayed

@Smoke
Scenario: Footer text validation
Given User is on Swaglabs website loginpage
When user enters username = "standard_user" and Password = "secret_sauce"
Then footer text = "© 2021 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy" is displayed in the home Page