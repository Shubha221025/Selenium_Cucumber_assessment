$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
formatter.feature({
  "line": 2,
  "name": "eLearning Signup",
  "description": "",
  "id": "elearning-signup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate eLearning Signup",
  "description": "",
  "id": "elearning-signup;validate-elearning-signup",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User has access to eLearning HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User navigates to the eLearning HomePage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Signup button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Registration page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user fills in all mandatory values \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cemail\u003e\",\"\u003cusername\u003e\",\"\u003cpass\u003e\",\"\u003cconfirmpwd\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Registration should be successful and should display Welcome Message with \"\u003cfirstname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Clicks on Compose",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enters receipient address, subject and message \"\u003creceipient\u003e\", \"\u003csubject\u003e\", \"\u003cmessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Clicks on Send Message button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Mail is sent successfully and a Confirmation of mail sent to \"\u003creceipient\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "elearning-signup;validate-elearning-signup;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "username",
        "pass",
        "confirmpwd",
        "receipient",
        "subject",
        "message"
      ],
      "line": 20,
      "id": "elearning-signup;validate-elearning-signup;;1"
    },
    {
      "cells": [
        "text1",
        "test2",
        "testmail23@email.com",
        "Assigment",
        "maymonth12345",
        "maymonth12345",
        "next",
        "Test Mail",
        "Welcome"
      ],
      "line": 21,
      "id": "elearning-signup;validate-elearning-signup;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2485037100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validate eLearning Signup",
  "description": "",
  "id": "elearning-signup;validate-elearning-signup;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User has access to eLearning HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User navigates to the eLearning HomePage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Signup button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Registration page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user fills in all mandatory values \"text1\",\"test2\",\"testmail23@email.com\",\"Assigment\",\"maymonth12345\",\"maymonth12345\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Registration should be successful and should display Welcome Message with \"text1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Clicks on Compose",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enters receipient address, subject and message \"next\", \"Test Mail\", \"Welcome\"",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Clicks on Send Message button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Mail is sent successfully and a Confirmation of mail sent to \"next\" is displayed",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_has_access_to_elearning_homepage()"
});
formatter.result({
  "duration": 1412156400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_navigates_to_the_elearning_homepage()"
});
formatter.result({
  "duration": 4462473100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_signup_button()"
});
formatter.result({
  "duration": 2479719100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.registration_page_is_displayed()"
});
formatter.result({
  "duration": 2013219100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text1",
      "offset": 36
    },
    {
      "val": "test2",
      "offset": 44
    },
    {
      "val": "testmail23@email.com",
      "offset": 52
    },
    {
      "val": "Assigment",
      "offset": 75
    },
    {
      "val": "maymonth12345",
      "offset": 87
    },
    {
      "val": "maymonth12345",
      "offset": 103
    }
  ],
  "location": "stepdefinition.user_fills_in_all_mandatory_values_somethingsomethingsomethingsomethingsomethingsomething(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 729884000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_register_button()"
});
formatter.result({
  "duration": 849779800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text1",
      "offset": 80
    }
  ],
  "location": "stepdefinition.user_registration_should_be_successful_and_should_display_welcome_message_with_something(String)"
});
formatter.result({
  "duration": 2037575800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_homepage()"
});
formatter.result({
  "duration": 2677435000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.clicks_on_compose()"
});
formatter.result({
  "duration": 2230686700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Compose\"}\n  (Session info: chrome\u003d90.0.4430.212)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027DESKTOP-NEO7OOB\u0027, ip: \u0027192.168.43.93\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\SUBAJA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60419}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1f1473a05d5d0583fbaf791e6a633ffb\n*** Element info: {Using\u003dlink text, value\u003dCompose}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.stepdefinition.clicks_on_compose(stepdefinition.java:87)\r\n\tat ✽.And Clicks on Compose(signup.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "next",
      "offset": 48
    },
    {
      "val": "Test Mail",
      "offset": 56
    },
    {
      "val": "Welcome",
      "offset": 69
    }
  ],
  "location": "stepdefinition.enters_receipient_address_subject_and_message_something_something_something(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefinition.clicks_on_send_message_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "next",
      "offset": 62
    }
  ],
  "location": "stepdefinition.mail_is_sent_successfully_and_a_confirmation_of_mail_sent_to_something_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 949130800,
  "status": "passed"
});
});