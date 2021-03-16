package generic;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class baseTestclass implements IAutoConst {
	
//public WebDriver driver;
	
	public static WebDriver getChromeDriver()
	{
		String ChromeKey = Library.getProperty(CONFIG_PATH, "Chrome_driver");
		String ChromeValue = Library.getProperty(CONFIG_PATH, "Chrome_driverPath");
		
		System.setProperty(ChromeKey,ChromeValue);
		WebDriver driver = new ChromeDriver();
		return driver;
	}
	
	
	public void goToApplication(WebDriver driver)
	{
		String url = Library.getProperty(CONFIG_PATH, "URL");
		driver.get(url);
	}
	
	public void timeOut(WebDriver driver)
	{
		int timeOut = Integer.parseInt(Library.getProperty(CONFIG_PATH, "implicit_timeout"));
		driver.manage().timeouts().implicitlyWait(timeOut, TimeUnit.SECONDS);
	}

}
