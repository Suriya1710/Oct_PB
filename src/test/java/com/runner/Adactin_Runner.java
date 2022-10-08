package com.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.utilityfiles.Utility_Files;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) // ----> cucumber with junit
@CucumberOptions(features = ".\\Feature",

		glue = "com.stepdef",

		monochrome = true,

		dryRun = false,

		strict = true,
		
		tags = "~@Ad3", 

		plugin = { 
				
				"html:Reports",
				
				// "pretty" ,
				
				"json:Reports/Rep.json"

		}

)
public class Adactin_Runner {

	public static WebDriver driver; // ---> null

	@BeforeClass
	public static void set_Up() {

		driver = Utility_Files.get_Browser("chrome");

	}

	@AfterClass
	public static void tear_Down() {

		driver.close();

	}

}
