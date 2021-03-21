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

@Regression
Scenario Outline: Login validation diff credentials
Given User is on Swaglabs website loginpage
When user enters "<Username>" and "<Password>"
Then Home Page is displayed

Examples:
|Username|Password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|


@Smoke1
Scenario Outline: Login validation - Invalid Credentials
Given User is on Swaglabs website loginpage
When user enters "<Username>" and "<Password>"
Then following error message is displayed
| Epic sadface: Username and password do not match any user in this service |

Examples:
|Username|Password|
|abc|secret_sauce|
