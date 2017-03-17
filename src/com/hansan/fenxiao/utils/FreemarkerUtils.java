package com.hansan.fenxiao.utils;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class FreemarkerUtils
{
  public static void freemarker(HttpServletRequest request, HttpServletResponse response, String ftlName, Configuration cfg, Map<Object, Object> root)
  {
    Template t = null;
    try {
      t = cfg.getTemplate(ftlName, "utf-8");
    } catch (IOException e3) {
      e3.printStackTrace();
    }

    PrintWriter out = null;
    try {
      out = response.getWriter();
    }
    catch (IOException e2) {
      e2.printStackTrace();
    }

    try
    {
      t.process(root, out);
    } catch (TemplateException e) {
      try {
        throw new ServletException("处理Template模版中出现错误", e);
      } catch (ServletException e1) {
        e1.printStackTrace();
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}