package stepDefenition;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import generic.baseTestclass;
import PageObjects.LoginPage;
import PageObjects.homePage;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

@RunWith(Cucumber.class)
public class loginToSwagLabs extends baseTestclass {

	baseTestclass bt = new baseTestclass();
	WebDriver driver = baseTestclass.getChromeDriver();
	LoginPage lp = new LoginPage(driver);
	homePage hp = new homePage(driver);

	 @Given("^User is on Swaglabs website loginpage$")
	    public void user_is_on_swaglabs_website_loginpage() throws Throwable {

		  bt.goToApplication(driver);
		  driver.manage().window().maximize();
	      String title = driver.getTitle();
	      Assert.assertEquals("Success", "Swag Labs", title);
	    }

	    @When("^user enters username = \"([^\"]*)\" and Password = \"([^\"]*)\"$")
	    public void user_enters_username_something_and_password_something(String strArg1, String strArg2) throws Throwable {
	      lp.setUsername(strArg1);
	      lp.setPassword(strArg2);
	      lp.click_Login();
	    }

	    @Then("^Home Page is displayed$")
	    public void home_page_is_displayed() throws Throwable {
	    	
	    	bt.timeOut(driver);
	    	String headline  = hp.getTitle();
	    	Assert.assertEquals("Success", "Products", headline);
	    	driver.quit();
	       
	    }
	    
	    @And("^click on Menu$")
	    public void click_on_Menu() throws Throwable {
	    	hp.clickMenu();
	    }


	    @And("^click on logout$")
	    public void click_on_logout() throws Throwable {
	    	bt.timeOut(driver);
	    	hp.clickLogout();
	    }
	    
		
		@Then("^again login Page is displayed$")
	    public void again_login_page_is_displayed() throws Throwable {
			Assert.assertEquals("Success", "https://www.saucedemo.com/", driver.getCurrentUrl()); 
			driver.quit();
	    }
		
		
		@Then("^footer text = \"([^\"]*)\" is displayed in the home Page$")
	    public void footer_text_something_is_displayed_in_the_home_page(String strArg1) throws Throwable {
			Assert.assertEquals("Success", strArg1, hp.getFooterText());
			driver.quit();
	    }
		
		@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
		public void user_enters_something_and_something(String username, String password) throws Throwable {
		      lp.setUsername(username);
		      lp.setPassword(password);
		      lp.click_Login();
		    }
		
		@Then("^following error message is displayed$")
	    public void following_error_message_is_displayed(DataTable table) throws Throwable {
	       List<List<String>> obj = table.raw();
	       String err_Msg1 = obj.get(0).get(0).toString();
	       bt.timeOut(driver);
	       String err_Msg = lp.getErrormessage();
	       System.out.println(err_Msg1);
	       System.out.println(err_Msg);
	       Assert.assertEquals("Success", err_Msg, err_Msg1);
			driver.quit();
	    }
		
		 /*Then("Then footer text is displayed in the home Page", () -> {
	         System.out.println("Inside Given");
	    });*/
		
		
}
