package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;



import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
	WebDriver driver;

	@Given("^user is on login page$")
	public void user_is_on_login_page() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("This Step opens the chrome browser and launches the application.");

		System.setProperty("webdriver.chrome.driver", "D:\\Workspace\\Cucumber_Selenium_Integration\\Driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://classic.crmpro.com");
		String title = driver.getTitle();
		System.out.println(title);
		//Assert.assertEquals("CRMPRO  - CRM software for customer relationship management, sales, and support.", title);

	}

	@When("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password)

	{
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);

	}

	@And("^user clicks on login button$")
	public void user_clicks_on_login_button()
	{
		
		WebElement loginButton = driver.findElement(By.xpath("//*[@id=\"loginForm\"]/div/div/input"));
		
		JavascriptExecutor js= (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginButton);
		
	}
	
	@Then("^user is on home page$")
	
	public void user_is_on_home_page()
	{
		System.out.println("user is on home page");
	}
	
	}
	

