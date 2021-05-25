package TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= "src/test/java/features",
		glue = {"StepDefinition", "utilhooks"},
		plugin= {"pretty",
				"html:target/Reports/Report_HTML.html",
				"json:target/Reports/Report_JSON.json",
				"junit:target/Reports/Report_JUNIT.xml"},
		monochrome= true)


public class testrunner {

}
