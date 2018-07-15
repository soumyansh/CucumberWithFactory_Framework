package pages.actions;

import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

import pages.locators.CarSearchPageLocators;
import pages.locators.HomePageLocators;
import utilities.SeleniumDriver;

public class HomePageActions {

	HomePageLocators homepagelocators;
	
	public HomePageActions() {
		this.homepagelocators=new HomePageLocators();
		AjaxElementLocatorFactory factory = new AjaxElementLocatorFactory(SeleniumDriver.getDriver(), 10);
		PageFactory.initElements(factory, this.homepagelocators);
	}
	
	public void moveToCarsForSale() {
	/*	Actions action =new Actions(SeleniumDriver.getDriver());
		action.moveToElement(SeleniumDriver.getDriver().findElement(By.xpath("//*[text()='Cars For Sale']"))).build().perform();
	*/	
		Actions action=new Actions(SeleniumDriver.getDriver());
		action.moveToElement(homepagelocators.CarsForSale).build().perform();
		
	}
	
	public CarSearchPageActions searchCarsSubMenu() {
		homepagelocators.SearchCar.click();
		return new CarSearchPageActions();
		
	}
	
	public UsedCarSearchPageActions UsedCarSearchSubMenu() {
		homepagelocators.UsedCarSearch.click();
		return new UsedCarSearchPageActions() ;
		
	}
}
