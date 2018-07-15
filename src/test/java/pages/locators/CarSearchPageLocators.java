package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CarSearchPageLocators {

	@FindBy(xpath="//*[@id='makes']")
	public WebElement CarMake;
	
	@FindBy(xpath="//*[@id='models']")
	public WebElement CarModel;
	
	@FindBy(xpath="//*[@id='locations']")
	public WebElement Locations;
	
	@FindBy(xpath="//*[@id='search-submit']")
	public WebElement FindMyNextCar;
}
