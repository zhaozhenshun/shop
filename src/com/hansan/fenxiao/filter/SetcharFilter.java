 package com.hansan.fenxiao.filter;
 
 import java.io.IOException;
 import javax.servlet.Filter;
 import javax.servlet.FilterChain;
 import javax.servlet.FilterConfig;
 import javax.servlet.ServletException;
 import javax.servlet.ServletRequest;
 import javax.servlet.ServletResponse;
 import javax.servlet.http.HttpServletRequest;
 import javax.servlet.http.HttpServletResponse;
 
 public class SetcharFilter
   implements Filter
 {
   public void destroy()
   {
   }
 
   public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
     throws IOException, ServletException
   {
     HttpServletRequest request = (HttpServletRequest)req;
     HttpServletResponse response = (HttpServletResponse)res;
     request.setCharacterEncoding("UTF-8");
     response.setCharacterEncoding("UTF-8");
     response.setContentType("text/html");
 
     chain.doFilter(request, response);
   }
 
   public void init(FilterConfig filterConfig)
     throws ServletException
   {
   }
 }