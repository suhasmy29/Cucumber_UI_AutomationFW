$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Swaglabs website",
  "description": "",
  "id": "swaglabs-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login validation",
  "description": "",
  "id": "swaglabs-website;login-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Swaglabs website loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters username \u003d \"standard_user\" and Password \u003d \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "loginToSwagLabs.user_is_on_swaglabs_website_loginpage()"
});
formatter.result({
  "duration": 18282486000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 24
    },
    {
      "val": "secret_sauce",
      "offset": 55
    }
  ],
  "location": "loginToSwagLabs.user_enters_username_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 2888023700,
  "status": "passed"
});
formatter.match({
  "location": "loginToSwagLabs.home_page_is_displayed()"
});
formatter.result({
  "duration": 2364830800,
  "status": "passed"
});
formatter.uri("Logout.feature");
formatter.feature({
  "line": 1,
  "name": "Swaglabs website logout",
  "description": "",
  "id": "swaglabs-website-logout",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Logout validation",
  "description": "",
  "id": "swaglabs-website-logout;logout-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Swaglabs website loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters username \u003d \"problem_user\" and Password \u003d \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on Menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "again login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "loginToSwagLabs.user_is_on_swaglabs_website_loginpage()"
});
formatter.result({
  "duration": 9354372900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 24
    },
    {
      "val": "secret_sauce",
      "offset": 54
    }
  ],
  "location": "loginToSwagLabs.user_enters_username_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 738292000,
  "status": "passed"
});
formatter.match({
  "location": "loginToSwagLabs.click_on_Menu()"
});
formatter.result({
  "duration": 166018800,
  "status": "passed"
});
formatter.match({
  "location": "loginToSwagLabs.click_on_logout()"
});
formatter.result({
  "duration": 248386900,
  "status": "passed"
});
formatter.match({
  "location": "loginToSwagLabs.again_login_page_is_displayed()"
});
formatter.result({
  "duration": 1573595900,
  "status": "passed"
});
});