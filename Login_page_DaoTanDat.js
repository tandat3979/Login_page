import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;
public class LoginAutomation 
{
	@Test
	public void login() 
	{
		System.setProperty("webdriver.chrome.driver", "path of driver");
		WebDriver driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("Link");
		WebElement username=driver.findElement(By.id("idLogin"));
		WebElement password=driver.findElement(By.id("idPassword"));
		WebElement login=driver.findElement(By.name("idCommit"));
		username.sendKeys("username");
		password.sendKeys("your_password");
		login.click();
		String actualUrl="actualUrl";
		String expectedUrl= driver.getCurrentUrl();
		Assert.assertEquals(expectedUrl,actualUrl);
	}
}