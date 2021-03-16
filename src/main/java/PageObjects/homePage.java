package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import generic.baseTestclass;

public class homePage extends baseTestclass{
	
	@FindBy(xpath="//*[@id=\"inventory_filter_container\"]/div")
	private WebElement Product;
	
	@FindBy(id="react-burger-menu-btn")
	private WebElement menu;
	
	@FindBy(id="logout_sidebar_link")
	private WebElement logOut;
	
	@FindBy(xpath="//*[@id=\"page_wrapper\"]/footer/div")
	private WebElement footer_licenseText;
	
	
	public String getTitle()
	{
		return (Product.getText());
	}
	
	public void clickMenu()
	{
		menu.click();
	}
	
	public void clickLogout()
	{
		logOut.click();
	}
	
	public String getFooterText()
	{
		return footer_licenseText.getText();
	}
	
	public homePage(WebDriver driver)
	{
		PageFactory.initElements(driver, this);
	}

}
