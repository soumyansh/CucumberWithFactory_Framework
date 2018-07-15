package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePageLocators {

	@FindBy(xpath = "//*[text()='Cars For Sale']")
	public WebElement CarsForSale;

	@FindBy(xpath = "//*[text()='Search Cars']")
	public WebElement SearchCar;

	@FindBy(xpath = "//*[text()='Sell My Car']")
	public WebElement SellMyCar;

	@FindBy(xpath = "//*[text()='Car Reviews']")
	public WebElement CarReviews;

	@FindBy(xpath = "//*[text()='Car News']")
	public WebElement CarNews;
	
	@FindBy(xpath="//*[text()='Used Cars Search']")
	public WebElement UsedCarSearch;
}
