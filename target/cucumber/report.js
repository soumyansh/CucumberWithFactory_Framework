$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CarSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Validation of car search page",
  "description": "In order to validate car search as a buyer\r\nI navigate to http://www.carguide.com.au",
  "id": "validation-of-car-search-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SearchCar"
    }
  ]
});
formatter.before({
  "duration": 20430941015,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Validate search cars page",
  "description": "",
  "id": "validation-of-car-search-page;validate-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@SearchCarPositive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "i am on the home page of carsguide website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "i move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 10
    },
    {
      "cells": [
        "Cars For Sale"
      ],
      "line": 11
    },
    {
      "cells": [
        "Search Cars"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "i click on search cars",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "i select Make as \"BMW\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "i select model as \"1 SERIES\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "i select location as \"Australia\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "i click on Find my next car button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "i should see list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the page title should match as \"Bmw 1 Series for Sale | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearchSteps.i_am_on_the_home_page_of_carsguide_website()"
});
formatter.result({
  "duration": 251129646,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 1076401043,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_search_cars()"
});
formatter.result({
  "duration": 7308662047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 18
    }
  ],
  "location": "CarSearchSteps.i_select_Make_as(String)"
});
formatter.result({
  "duration": 2160052184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 SERIES",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_select_model_as(String)"
});
formatter.result({
  "duration": 592014628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 22
    }
  ],
  "location": "CarSearchSteps.i_select_location_as(String)"
});
formatter.result({
  "duration": 852518071,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_Find_my_next_car_button()"
});
formatter.result({
  "duration": 15627391676,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "duration": 31653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series for Sale | carsguide",
      "offset": 32
    }
  ],
  "location": "CarSearchSteps.the_page_title_should_match_as(String)"
});
formatter.result({
  "duration": 245620429,
  "status": "passed"
});
formatter.after({
  "duration": 951723341,
  "status": "passed"
});
formatter.uri("UsedCarSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Validation of Used car search page",
  "description": "In order to validate car search as a buyer\r\nI navigate to http://www.carguide.com.au",
  "id": "validation-of-used-car-search-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UsedCarSearch"
    }
  ]
});
formatter.before({
  "duration": 18267186364,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Validate Used search cars page",
  "description": "",
  "id": "validation-of-used-car-search-page;validate-used-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@UsedSearchCarPositive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "i am on the home page of carsguide website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "i move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 10
    },
    {
      "cells": [
        "Cars For Sale"
      ],
      "line": 11
    },
    {
      "cells": [
        "Search Cars"
      ],
      "line": 12
    },
    {
      "cells": [
        "Used Cars Search"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "i click on Used Cars Search link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "i select Make as \"BMW\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "i select model as \"1 SERIES\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "i select location as \"Australia\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "i click on Find my next car button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i should see list of used searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the page title should match as \"Used Bmw 1 Series for Sale | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearchSteps.i_am_on_the_home_page_of_carsguide_website()"
});
formatter.result({
  "duration": 2165618,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 561254972,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_click_on_Used_Cars_Search_link()"
});
formatter.result({
  "duration": 7648243296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 18
    }
  ],
  "location": "CarSearchSteps.i_select_Make_as(String)"
});
formatter.result({
  "duration": 1285613585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 SERIES",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_select_model_as(String)"
});
formatter.result({
  "duration": 645135805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 22
    }
  ],
  "location": "CarSearchSteps.i_select_location_as(String)"
});
formatter.result({
  "duration": 814077591,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_Find_my_next_car_button()"
});
formatter.result({
  "duration": 9652348689,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_should_see_list_of_used_searched_cars()"
});
formatter.result({
  "duration": 2012490,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.UsedCarSearchSteps.i_should_see_list_of_used_searched_cars(UsedCarSearchSteps.java:23)\r\n\tat ✽.Then i should see list of used searched cars(UsedCarSearch.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Bmw 1 Series for Sale | carsguide",
      "offset": 32
    }
  ],
  "location": "CarSearchSteps.the_page_title_should_match_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1150041062,
  "status": "passed"
});
});