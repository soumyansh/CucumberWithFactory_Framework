package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.testng.Assert;

import pages.locators.HomePageLocators;
import pages.locators.UsedCarSearchPageLocators;
import utilities.SeleniumDriver;

public class UsedCarSearchPageActions {
UsedCarSearchPageLocators usedCarSearchPageLoc;
	public UsedCarSearchPageActions() {
		this.usedCarSearchPageLoc=new UsedCarSearchPageLocators();
		AjaxElementLocatorFactory factory=new AjaxElementLocatorFactory(SeleniumDriver.getDriver(),10);
		PageFactory.initElements(factory, this.usedCarSearchPageLoc);
	}
	
	public void verifyPageTitle(String title) {
	Assert.assertEquals(SeleniumDriver.getDriver(), title);	
	}
}
