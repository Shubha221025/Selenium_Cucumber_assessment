package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;

public class stepdefinition {
	
   WebDriver driver = new ChromeDriver();
	
	@Given("^User access to eLearning HomePage$")
    public void user_has_access_to_elearning_homepage() {
    System.out.println("Test Start");
    }

    @When("^User navigates to eLearning HomePage$")
    public void user_navigates_to_the_elearning_homepage() {
    driver.navigate().to("http://elearningm1.upskills.in/");
    String title= driver.getTitle();
    System.out.println(title);
    }
    
    @And("^User Clicks on Signup button$")
    public void user_clicks_on_signup_button()  {
    driver.findElement(By.linkText("Sign up!")).click();
    System.out.println("user clicked on Sign-Up button");
    }
    
    @Then("^Registration page is opened$")
    public void registration_page_is_displayed() throws InterruptedException {
    String regtitle= driver.getTitle();
    System.out.println(regtitle);
    Thread.sleep(2000);
    }
    
    
    @When("^user fills all the mandatory values \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void user_fills_in_all_mandatory_values_somethingsomethingsomethingsomethingsomethingsomething(String firstname, String lastname, String email, String username, String pass, String confirmpwd)  {
    driver.findElement(By.id("registration_firstname")).sendKeys(firstname);
    driver.findElement(By.id("registration_lastname")).sendKeys(lastname);
    driver.findElement(By.id("registration_email")).sendKeys(email);
    driver.findElement(By.id("username")).sendKeys(username);
    driver.findElement(By.id("pass1")).sendKeys(pass);
    driver.findElement(By.id("pass2")).sendKeys(confirmpwd);
    System.out.println("Details Entered");  
    }
    
    @And("^User clicks on Register button$")
    public void user_clicks_on_register_button() {
    driver.findElement(By.id("registration_submit")).click();
    System.out.println("Details Submitted");
    }
    
    
    @Then("^User Registration should successful and display Welcome Message with \"([^\"]*)\"$")
    public void user_registration_should_be_successful_and_should_display_welcome_message_with_something(String firstname) throws InterruptedException {
    	Thread.sleep(2000);
    	if(driver.getPageSource().contains(firstname))
    	{
    		System.out.println("User Registration is successfull");	
    	}
    	    	
     }


    @When("^User clicks on homepage$")
    public void user_clicks_on_homepage() throws InterruptedException {
    	Thread.sleep(2000);
    	driver.findElement(By.xpath("//*[@id=\"navbar\"]/ul[1]/li[1]/a")).click();
    	
    }
    	
    @And("^Clicks on Compose$")
    public void clicks_on_compose() throws InterruptedException {
    driver.manage().window().maximize();
    Thread.sleep(2000);
    driver.findElement(By.linkText("Compose")).click();
    }


    @And("^enters receipient address, subject and message \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void enters_receipient_address_subject_and_message_something_something_something(String receipient, String subject, String message) throws InterruptedException {
    driver.findElement(By.xpath("//*[@type='search']")).sendKeys(receipient);
    Thread.sleep(2000);
    driver.findElement(By.xpath("//*[@id=\"select2-compose_message_users-results\"]/li[1]")).click();
	Thread.sleep(2000);
	  
	driver.findElement(By.xpath("//*[@name='title']")).sendKeys(subject);
	Thread.sleep(6000);
	
	WebElement iframe = driver.findElement(By.cssSelector(".cke_wysiwyg_frame"));;
	driver.switchTo().frame(iframe);
	Thread.sleep(2000);
	driver.findElement(By.xpath("/html/body")).sendKeys(message);
	driver.switchTo().defaultContent();
    }

    @And("^Clicks on Send Message button$")
    public void clicks_on_send_message_button() throws InterruptedException {
    driver.findElement(By.xpath("//*[@id='compose_message_compose']")).click();
	Thread.sleep(3000);
    
    }
    
    @Then("^Mail is sent successfully and a Confirmation of mail sent to \"([^\"]*)\" is displayed$")
    public void mail_is_sent_successfully_and_a_confirmation_of_mail_sent_to_something_is_displayed(String receipient)  {
     if(driver.getPageSource().contains(receipient)){
    	System.out.println("Mail sent Successful");		
		 }     
    } 

	}



