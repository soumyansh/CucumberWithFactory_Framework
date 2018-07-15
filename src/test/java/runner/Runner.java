package runner;

import java.io.File;

import org.testng.annotations.BeforeClass;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/java/feature" }, glue = { "steps" }, monochrome = true,
		// tags = {"@Sanity,@Build" },
		plugin = { "json:target/RunCuke/cucumber.json", "pretty", "html:target/cucumber",
				"com.cucumber.listener.ExtentCucumberFormatter" })
public class Runner extends AbstractTestNGCucumberTests {

	@BeforeClass
	public static void writeExtentReport() {
		ExtentCucumberFormatter.initiateExtentCucumberFormatter();
		ExtentCucumberFormatter.loadConfig(new File(
				"C:\\Users\\Soumyansh\\eclipse-workspace\\CucumberFramework_07132018\\src\\test\\resources\\ExtentReport\\ReportsConfig.xml"));
		File filePath = new File(
				"C:\\Users\\Soumyansh\\eclipse-workspace\\CucumberFramework_07132018\\target\\Extent\\report.html");
		ExtentCucumberFormatter.initiateExtentCucumberFormatter(filePath);
		
	}
}
