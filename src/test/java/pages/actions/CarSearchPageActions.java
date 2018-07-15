package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.CarSearchPageLocators;
import utilities.SeleniumDriver;

public class CarSearchPageActions {

	CarSearchPageLocators carSearchPageLocators;
	
	public CarSearchPageActions() {
		this.carSearchPageLocators=new CarSearchPageLocators();
		AjaxElementLocatorFactory factory = new AjaxElementLocatorFactory(SeleniumDriver.getDriver(), 10);
		PageFactory.initElements(factory, this.carSearchPageLocators);
	}
	
	public void searchCarsMake(String Make) {
		Select s1=new Select(carSearchPageLocators.CarMake);
		s1.selectByVisibleText(Make);
		
	}
	public void searchCarsSeries(String Series) {
		Select s2=new Select(carSearchPageLocators.CarModel);
		s2.selectByVisibleText(Series);
		
	}
	
	public void searchCarsLocation(String Location) {
		
		Select s3=new Select(carSearchPageLocators.Locations);
		s3.selectByVisibleText(Location);
		
	}
	
	public void FindmyNextCar() {
		carSearchPageLocators.FindMyNextCar.click();
	}
	
	
}
