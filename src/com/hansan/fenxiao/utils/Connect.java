 package com.hansan.fenxiao.utils;
 
 import java.io.BufferedReader;
 import java.io.InputStreamReader;
 import java.io.PrintStream;
 import java.net.HttpURLConnection;
 import java.net.URL;
 
 public class Connect
 {
   public static String httpConnect(String url)
   {
     String result = "";
     BufferedReader in = null;
     try {
       URL realUrl = new URL(url);
 
       HttpURLConnection connection = (HttpURLConnection)realUrl.openConnection();
 
       connection.setRequestProperty("accept", "*/*");
       connection.setRequestProperty("connection", "Keep-Alive");
       connection.setRequestProperty("user-agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
       int statusCode = connection.getResponseCode();
 
       connection.connect();
 
       in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
       String line;
       while ((line = in.readLine()) != null)
       {
         result = result + line;
       }
       System.out.println("url:" + url);
       System.out.println("statusCode:" + statusCode);
       System.out.println("result:" + result);
       in.close();
     } catch (Exception e) {
       e.printStackTrace();
     }
     return result;
   }
 }