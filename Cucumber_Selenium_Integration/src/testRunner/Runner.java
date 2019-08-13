package testRunner;


//import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
//import cucumber.api.junit.Cucumber;

//@RunWith(Cucumber.class)
@CucumberOptions(
		features = "Features", 			// path of features file
		glue = {"StepDefinitions" }, 		// path of step definition files
		plugin= {"pretty","html:test-output","json:json_output\\cucumber.json"}, // to generate a report in various formats like in html format or json or any other format like junit xml can be generated
		monochrome = true,		       // to display console output in readabale format
		dryRun = false, 			// to match feature with step methods whether for each steps we have annotated step methods available or not keep it false once checked
		strict= true															// it strictly checks the mapping between feature file and stepdefinitions methods	and it gives Pending Exception if not followed
		)


public class Runner extends AbstractTestNGCucumberTests {

}
