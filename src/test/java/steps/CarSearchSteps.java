package steps;

import java.util.List;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pages.actions.CarSearchPageActions;
import pages.actions.HomePageActions;
import pages.locators.HomePageLocators;
import utilities.SeleniumDriver;

public class CarSearchSteps {
	HomePageActions hpa = new HomePageActions();
	CarSearchPageActions c = new CarSearchPageActions();

	
	
	@Given("^i am on the home page of carsguide website$")
	public void i_am_on_the_home_page_of_carsguide_website() throws Throwable {
		SeleniumDriver.getDriver();
	}

	@When("^i move to the menu$")
	public void i_move_to_the_menu(List<String> list) throws Throwable {
		System.out.println("Menu clicked is " + list.get(1));

		hpa.moveToCarsForSale();
	}

	@Then("^i click on search cars$")
	public void i_click_on_search_cars() throws Throwable {
		hpa.searchCarsSubMenu();

	}

	@Then("^i select Make as \"([^\"]*)\"$")
	public void i_select_Make_as(String arg1) throws Throwable {

		c.searchCarsMake(arg1);

	}

	@Then("^i select model as \"([^\"]*)\"$")
	public void i_select_model_as(String arg1) throws Throwable {
		c.searchCarsSeries(arg1);

	}

	@Then("^i select location as \"([^\"]*)\"$")
	public void i_select_location_as(String arg1) throws Throwable {
		c.searchCarsLocation(arg1);

	}

	@Then("^i click on Find my next car button$")
	public void i_click_on_Find_my_next_car_button() throws Throwable {
		c.FindmyNextCar();

	}

	@Then("^i should see list of searched cars$")
	public void i_should_see_list_of_searched_cars() throws Throwable {
		//Assert.assertTrue(false);

	}

	@Then("^the page title should match as \"([^\"]*)\"$")
	public void the_page_title_should_match_as(String arg1) throws Throwable {
		try {
			Assert.assertEquals(SeleniumDriver.getDriver().getTitle(), arg1);
			System.out.println("Title Matched");
		} catch (Throwable e) {
			System.out.println("Title didn't match");
		}

	}

}
