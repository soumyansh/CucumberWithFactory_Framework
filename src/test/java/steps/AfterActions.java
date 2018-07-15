package steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import utilities.SeleniumDriver;

public class AfterActions {
@After
	public static void tearDown(Scenario scenario) {
		
		if(scenario.isFailed()) {
			byte[] screenshotBytes=((TakesScreenshot)SeleniumDriver.getDriver()).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshotBytes, "image/png");
		}
		
		SeleniumDriver.quitBrowser();
	}
	
}
