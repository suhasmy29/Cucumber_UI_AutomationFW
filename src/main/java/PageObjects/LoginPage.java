package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	public WebDriver driver;
	
	@FindBy(id="user-name")
	private WebElement userName;
	
	@FindBy(id="password")
	private WebElement Password;
	
	@FindBy(id="login-button")
	private WebElement ClickLoginBtn;
	
	@FindBy(xpath="//*[@id=\"login_button_container\"]/div/form/h3")
	private WebElement errorMessage;
	
	
	public void setUsername(String username)
	{
	 userName.sendKeys(username);
	}
	
	public void setPassword(String pwd)
	{
		Password.sendKeys(pwd);
	}
	
	public void click_Login()
	{
		ClickLoginBtn.click();
	}
	
	public String getErrormessage()
	{
		return errorMessage.getText();
	}
	
	public LoginPage(WebDriver driver)
	{
		
		PageFactory.initElements(driver, this);
	}
	

}
