$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testfeature.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "##"
    },
    {
      "line": 3,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 4,
      "value": "#Keywords Summary :"
    },
    {
      "line": 5,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 6,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 7,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 8,
      "value": "#When: Some key actions"
    },
    {
      "line": 9,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 10,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 11,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 12,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 13,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 14,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 15,
      "value": "#| (Data Tables)"
    },
    {
      "line": 16,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 17,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 18,
      "value": "#\"\""
    },
    {
      "line": 19,
      "value": "## (Comments)"
    },
    {
      "line": 20,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 21,
      "value": "##"
    },
    {
      "line": 23,
      "value": "# Without Examples Keyword"
    },
    {
      "line": 24,
      "value": "#Feature: FreeCRM Login"
    },
    {
      "line": 26,
      "value": "#  Scenario: FreeCRM Login Test"
    },
    {
      "line": 27,
      "value": "#   Given user is on login page"
    },
    {
      "line": 28,
      "value": "#  When user enters username and password"
    },
    {
      "line": 29,
      "value": "#  And user clicks on login button"
    },
    {
      "line": 30,
      "value": "#  Then user is on home page"
    }
  ],
  "line": 35,
  "name": "FreeCRM Login",
  "description": "",
  "id": "freecrm-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "FreeCRM Login Test",
  "description": "",
  "id": "freecrm-login;freecrm-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "freecrm-login;freecrm-login-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 45,
      "id": "freecrm-login;freecrm-login-test;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 46,
      "id": "freecrm-login;freecrm-login-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "FreeCRM Login Test",
  "description": "",
  "id": "freecrm-login;freecrm-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_is_on_login_page()"
});
formatter.result({
  "duration": 21558312702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStep.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 643103715,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2678813937,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_is_on_home_page()"
});
formatter.result({
  "duration": 191147,
  "status": "passed"
});
});