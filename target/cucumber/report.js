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
  "duration": 22002050130,
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
  "duration": 278083323,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 473424013,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_search_cars()"
});
formatter.result({
  "duration": 7299766885,
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
  "duration": 1519923436,
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
  "duration": 476001540,
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
  "duration": 457738569,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_Find_my_next_car_button()"
});
formatter.result({
  "duration": 9885879208,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "duration": 37641,
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
  "duration": 58086317,
  "status": "passed"
});
formatter.after({
  "duration": 680441850,
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
  "duration": 21815655503,
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
  "duration": 1818727,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 734930065,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_click_on_Used_Cars_Search_link()"
});
formatter.result({
  "duration": 8753502288,
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
  "duration": 1185076778,
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
  "duration": 894318833,
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
  "duration": 447979383,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_Find_my_next_car_button()"
});
formatter.result({
  "duration": 9445748322,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_should_see_list_of_used_searched_cars()"
});
formatter.result({
  "duration": 126182,
  "status": "passed"
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
  "duration": 61239146,
  "status": "passed"
});
formatter.after({
  "duration": 502140383,
  "status": "passed"
});
});