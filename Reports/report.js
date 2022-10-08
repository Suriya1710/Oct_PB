$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin  Application",
  "description": "",
  "id": "hotel-booking-in-adactin--application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Functionality",
  "description": "",
  "id": "hotel-booking-in-adactin--application;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"\u003cUsername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigates To \"Adactin.com - Search Hotel\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin--application;login-functionality;",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ],
      "line": 16,
      "id": "hotel-booking-in-adactin--application;login-functionality;;1"
    },
    {
      "cells": [
        "ABC",
        "123"
      ],
      "line": 17,
      "id": "hotel-booking-in-adactin--application;login-functionality;;2"
    },
    {
      "cells": [
        "XYZ",
        "1710"
      ],
      "line": 18,
      "id": "hotel-booking-in-adactin--application;login-functionality;;3"
    },
    {
      "cells": [
        "SuriyaVeeran17",
        "Music1710"
      ],
      "line": 19,
      "id": "hotel-booking-in-adactin--application;login-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Login Functionality",
  "description": "",
  "id": "hotel-booking-in-adactin--application;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"ABC\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigates To \"Adactin.com - Search Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 7545108700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 991584400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 246064600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adactin.com - Search Hotel",
      "offset": 52
    }
  ],
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigates_To(String)"
});
formatter.result({
  "duration": 4656266100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login Functionality",
  "description": "",
  "id": "hotel-booking-in-adactin--application;login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"XYZ\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"1710\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigates To \"Adactin.com - Search Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 1862722500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XYZ",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 483578100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1710",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 258075900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adactin.com - Search Hotel",
      "offset": 52
    }
  ],
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigates_To(String)"
});
formatter.result({
  "duration": 3923300700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login Functionality",
  "description": "",
  "id": "hotel-booking-in-adactin--application;login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"SuriyaVeeran17\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"Music1710\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigates To \"Adactin.com - Search Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 1672841100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuriyaVeeran17",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 382267300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Music1710",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 243962300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adactin.com - Search Hotel",
      "offset": 52
    }
  ],
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigates_To(String)"
});
formatter.result({
  "duration": 5439765300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User Search And Select The Room And Details In The Select Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin--application;user-search-and-select-the-room-and-details-in-the-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User Select The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User Select The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User Select The Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User Click The Search Button It Navigates To The \"Adactin.com - Select Hotel\" Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Select_The_Location()"
});
formatter.result({
  "duration": 6190163400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 1546629400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 1804423600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 417678200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Check_In_Date()"
});
formatter.result({
  "duration": 426701300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Check_Out_Date()"
});
formatter.result({
  "duration": 1654187900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 686456000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Children_Per_Room()"
});
formatter.result({
  "duration": 476662600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adactin.com - Select Hotel",
      "offset": 50
    }
  ],
  "location": "Step_Def.user_Click_The_Search_Button_It_Navigates_To_The_Page(String)"
});
formatter.result({
  "duration": 2520501600,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User Confirm The Room In Search Hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin--application;user-confirm-the-room-in-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Ad2"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User Click The Select Button",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User Click The Continue Button It Navigates To The \"Adactin.com - Book A Hotel\" Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_The_Select_Button()"
});
formatter.result({
  "duration": 1116953900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adactin.com - Book A Hotel",
      "offset": 52
    }
  ],
  "location": "Step_Def.user_Click_The_Continue_Button_It_Navigates_To_The_Page(String)"
});
formatter.result({
  "duration": 1148829000,
  "status": "passed"
});
});