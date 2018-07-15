@SearchCar 
Feature: Validation of car search page 
	In order to validate car search as a buyer
I navigate to http://www.carguide.com.au

@SearchCarPositive 
Scenario: Validate search cars page 
	Given i am on the home page of carsguide website 
	When i move to the menu 
		|Menu|
		|Cars For Sale|
		|Search Cars|
	Then i click on search cars 
	And i select Make as "BMW" 
	And i select model as "1 SERIES" 
	And i select location as "Australia" 
	And i click on Find my next car button 
	Then i should see list of searched cars 
	And the page title should match as "Bmw 1 Series for Sale | carsguide" 
