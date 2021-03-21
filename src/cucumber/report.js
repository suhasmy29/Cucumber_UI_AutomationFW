$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Swaglabs website",
  "description": "",
  "id": "swaglabs-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Login validation - Invalid Credentials",
  "description": "",
  "id": "swaglabs-website;login-validation---invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Smoke1"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on Swaglabs website loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user enters \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "following error message is displayed",
  "rows": [
    {
      "cells": [
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 32
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "swaglabs-website;login-validation---invalid-credentials;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 35,
      "id": "swaglabs-website;login-validation---invalid-credentials;;1"
    },
    {
      "cells": [
        "abc",
        "secret_sauce"
      ],
      "line": 36,
      "id": "swaglabs-website;login-validation---invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Login validation - Invalid Credentials",
  "description": "",
  "id": "swaglabs-website;login-validation---invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Smoke1"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on Swaglabs website loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user enters \"abc\" and \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "following error message is displayed",
  "rows": [
    {
      "cells": [
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 32
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginToSwagLabs.user_is_on_swaglabs_website_loginpage()"
});
formatter.result({
  "duration": 55839123700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 13
    },
    {
      "val": "secret_sauce",
      "offset": 23
    }
  ],
  "location": "loginToSwagLabs.user_enters_something_and_something(String,String)"
});
formatter.result({
  "duration": 3888806300,
  "status": "passed"
});
formatter.match({
  "location": "loginToSwagLabs.following_error_message_is_displayed(DataTable)"
});
formatter.result({
  "duration": 25737711500,
  "status": "passed"
});
});