package utilities;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumDriver {

	private static SeleniumDriver seleniumDriver;

	private static WebDriver driver;

	public static WebDriverWait wait;
	public final static int TIMEOUT = 30;
	public final static int PAGE_LOAD_TIMEOUT = 50;

	private SeleniumDriver() {
		System.setProperty("webdriver.gecko.driver",
				"C:\\Users\\Soumyansh\\eclipse-workspace\\CucumberFramework_07132018\\src\\test\\resources\\Executables\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		wait = new WebDriverWait(driver, TIMEOUT);
		driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
		driver.get("https://www.carsguide.com.au");
	}

	public static WebDriver getDriver() {
		if (driver == null) {
			seleniumDriver = new SeleniumDriver();
		}
		return driver;
	}
public static void quitBrowser() {
	if(driver!=null) {
		driver.quit();
		driver=null;
	}
}

}
