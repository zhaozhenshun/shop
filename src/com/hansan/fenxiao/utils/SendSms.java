package com.hansan.fenxiao.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.Map;

public class SendSms
{
  public static void send(String content, String phone)
    throws IOException
  {
    String strUrl = ResourcesConfiguration.getInstance().getValue("smsUrl");
    String result = "";
    BufferedReader in = null;
    try {
      URL realUrl = new URL(strUrl + "&content=" + content + "&phone=" + phone);

      URLConnection connection = realUrl.openConnection();

      connection.setRequestProperty("accept", "*/*");
      connection.setRequestProperty("connection", "Keep-Alive");
      connection.setRequestProperty("user-agent", 
        "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");

      connection.connect();

      Map map = connection.getHeaderFields();

      in = new BufferedReader(
      new InputStreamReader(connection.getInputStream()));
      String line;
      while ((line = in.readLine()) != null)
      {
        result += line;
      }
    } catch (Exception e) {
      System.out.println("发送GET请求出现异常！" + e);
      e.printStackTrace();
      try
      {
        if (in != null)
          in.close();
      }
      catch (Exception e2) {
        e2.printStackTrace();
      }
    }
    finally
    {
      try
      {
        if (in != null)
          in.close();
      }
      catch (Exception e2) {
        e2.printStackTrace();
      }
    }
  }

  public static void main(String[] args) {
    try {
      send("测试发送短信【易联通】", "18705080053");
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}