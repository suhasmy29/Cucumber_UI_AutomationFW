package generic;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class Library implements IAutoConst{
	
	public static String getProperty(String config_path, String key)
	{
		Properties pr = new Properties();
		String property = "";
		try {
			pr.load(new FileInputStream(config_path));
			property = pr.getProperty(key);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return property;
	}

}
