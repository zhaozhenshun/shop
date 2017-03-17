 package com.hansan.fenxiao.action;
 
 import com.hansan.fenxiao.utils.BjuiPage;
 import com.opensymphony.xwork2.ActionSupport;
 import freemarker.template.Configuration;
 import javax.servlet.http.HttpServletRequest;
 import javax.servlet.http.HttpServletResponse;
 import org.apache.commons.logging.Log;
 import org.apache.commons.logging.LogFactory;
 import org.apache.struts2.interceptor.ServletRequestAware;
 import org.apache.struts2.interceptor.ServletResponseAware;
 
 public class BaseAction extends ActionSupport
   implements ServletRequestAware, ServletResponseAware
 {
   private static final long serialVersionUID = 1L;
   protected HttpServletRequest request;
   protected HttpServletResponse response;
   protected Configuration cfg;
   protected int pageCurrent = 1;
 
   protected int pageSize = 10;
   protected BjuiPage page;
   protected String ftlFileName;
   Log log = LogFactory.getLog(BaseAction.class);
 
   public void setServletResponse(HttpServletResponse arg0)
   {
     this.response = arg0;
   }
 
   public void setServletRequest(HttpServletRequest arg0)
   {
     this.request = arg0;
   }
 
   public void setPage(BjuiPage page) {
     this.page = page;
   }
   public BjuiPage getPage() {
     return this.page;
   }
 
   public int getPageCurrent() {
     return this.pageCurrent;
   }
 
   public void setPageCurrent(int pageCurrent) {
     this.pageCurrent = pageCurrent;
   }
 
   public int getPageSize() {
     return this.pageSize;
   }
 
   public void setPageSize(int pageSize) {
     this.pageSize = pageSize;
   }
 
   public String getFtlFileName() {
     return this.ftlFileName;
   }
 
   public void setFtlFileName(String ftlFileName) {
     this.ftlFileName = ftlFileName;
   }
 }
