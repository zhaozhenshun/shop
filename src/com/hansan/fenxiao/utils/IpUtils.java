 package com.hansan.fenxiao.utils;
 
 import javax.servlet.http.HttpServletRequest;
 import org.tuckey.web.filters.urlrewrite.utils.StringUtils;
 
 public class IpUtils
 {
   public static String getIpAddress(HttpServletRequest request)
     throws Exception
   {
     String ip = request.getHeader("X-Real-IP");
     if ((!StringUtils.isBlank(ip)) && (!"unknown".equalsIgnoreCase(ip))) {
       return ip;
     }
     ip = request.getHeader("X-Forwarded-For");
     if ((!StringUtils.isBlank(ip)) && (!"unknown".equalsIgnoreCase(ip)))
     {
       int index = ip.indexOf(',');
       if (index != -1) {
         return ip.substring(0, index);
       }
       return ip;
     }
 
     return request.getRemoteAddr();
   }
 }