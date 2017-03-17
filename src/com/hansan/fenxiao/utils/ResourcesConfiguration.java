 package com.hansan.fenxiao.utils;
 
 import java.io.PrintStream;
 import java.util.ResourceBundle;
 
 public class ResourcesConfiguration
 {
   private static Object lock = new Object();
   private static ResourcesConfiguration config = null;
   private static ResourceBundle rb = null;
   private static final String CONFIG_FILE = "resources";
 
   private ResourcesConfiguration()
   {
     rb = ResourceBundle.getBundle("resources");
   }
 
   public static ResourcesConfiguration getInstance() {
     synchronized (lock) {
       if (config == null) {
         config = new ResourcesConfiguration();
       }
     }
     return config;
   }
 
   public String getValue(String key) {
     return rb.getString(key);
   }
 
   public static void main(String[] args) {
     System.out.println(getInstance().getValue("REGISTER"));
   }
 }