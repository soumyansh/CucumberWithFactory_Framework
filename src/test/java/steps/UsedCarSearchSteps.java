package steps;

import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import pages.actions.HomePageActions;

public class UsedCarSearchSteps {

@Then("^i click on Used Cars Search link$")
public void i_click_on_Used_Cars_Search_link() throws Throwable {
   new HomePageActions().UsedCarSearchSubMenu();
    
}

@Then("^i should see list of used searched cars$")
public void i_should_see_list_of_used_searched_cars() throws Throwable {
   System.out.println("List of used cars displayed");
  Assert.assertTrue(false);
   
}

	
}
