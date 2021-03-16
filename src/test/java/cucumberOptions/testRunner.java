package cucumberOptions;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/Features", 
glue="stepDefenition",
plugin= {"pretty","html:src/cucumber","json:src/cucumber.json","junit:target/cukes.xml"},
monochrome=true,
tags ="@Smoke")
public class testRunner{


}
