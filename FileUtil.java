package com.simplilearn.demo.medicine;

import java.nio.file.Path;
import java.nio.file.Paths;

public class FileUtil {
	private FileUtil() {
	    // restrict instantiation
	  }

	  public static final String folderPath =  "D://incoming-files//";
	  public static final Path filePath = Paths.get(folderPath);

	}


