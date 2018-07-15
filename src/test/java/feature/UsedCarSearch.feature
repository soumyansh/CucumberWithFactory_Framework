@UsedCarSearch 
Feature: Validation of Used car search page 
In order to validate car search as a buyer
I navigate to http://www.carguide.com.au

@UsedSearchCarPositive 
Scenario: Validate Used search cars page 
	Given i am on the home page of carsguide website 
	When i move to the menu 
		|Menu|
		|Cars For Sale|
		|Search Cars|
		|Used Cars Search|
	Then i click on Used Cars Search link
	And i select Make as "BMW" 
	And i select model as "1 SERIES" 
	And i select location as "Australia" 
	And i click on Find my next car button 
	Then i should see list of used searched cars 
	And the page title should match as "Used Bmw 1 Series for Sale | carsguide" 
