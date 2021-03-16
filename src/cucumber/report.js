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
  "duration": 12224324600,
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
  "duration": 843902100,
  "status": "passed"
});
formatter.match({
  "location": "loginToSwagLabs.home_page_is_displayed()"
});
formatter.result({
  "duration": 1232811100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Footer text validation",
  "description": "",
  "id": "swaglabs-website;footer-text-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on Swaglabs website loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user enters username \u003d \"standard_user\" and Password \u003d \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "footer text \u003d \"© 2021 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy\" is displayed in the home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginToSwagLabs.user_is_on_swaglabs_website_loginpage()"
});
formatter.result({
  "duration": 6448344700,
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
  "duration": 748301000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "© 2021 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy",
      "offset": 15
    }
  ],
  "location": "loginToSwagLabs.footer_text_something_is_displayed_in_the_home_page(String)"
});
formatter.result({
  "duration": 1074871500,
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
  "duration": 6046663800,
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
  "duration": 798374600,
  "status": "passed"
});
formatter.match({
  "location": "loginToSwagLabs.click_on_Menu()"
});
formatter.result({
  "duration": 216696800,
  "status": "passed"
});
formatter.match({
  "location": "loginToSwagLabs.click_on_logout()"
});
formatter.result({
  "duration": 191425300,
  "status": "passed"
});
formatter.match({
  "location": "loginToSwagLabs.again_login_page_is_displayed()"
});
formatter.result({
  "duration": 969942900,
  "status": "passed"
});
});