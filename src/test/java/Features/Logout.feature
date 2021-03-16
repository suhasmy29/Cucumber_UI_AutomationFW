Feature: Swaglabs website logout

@Smoke
Scenario: Logout validation
Given User is on Swaglabs website loginpage
When user enters username = "problem_user" and Password = "secret_sauce"
And click on Menu
And click on logout
Then again login Page is displayed