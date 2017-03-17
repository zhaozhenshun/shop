 package com.hansan.fenxiao.utils;
 
 public class PageModel
 {
   private int pageSize = 10;
   private int allCount;
   private int currentPage;
 
   public int getAllPage()
   {
     return (this.allCount - 1) / this.pageSize + 1;
   }
 
   public int getStart()
   {
     return (this.currentPage - 1) * this.pageSize;
   }
   public int getPageSize() {
     return this.pageSize;
   }
   public void setPageSize(int pageSize) {
     this.pageSize = pageSize;
   }
   public int getAllCount() {
     return this.allCount;
   }
   public void setAllCount(int allCount) {
     this.allCount = allCount;
   }
   public int getCurrentPage() {
     return this.currentPage - 1;
   }
   public void setCurrentPage(int currentPage) {
     this.currentPage = currentPage;
   }
 
   public String getPageStr(String path) {
     String str = "";
     str = str + "当前第" + this.currentPage + "页  ";
     str = str + "共" + this.allCount + "条记录  ";
     if (this.currentPage > 1) {
       str = str + "<a href='" + path + "1'>首页</a> ";
       int flontPage = this.currentPage - 1;
       str = str + "<a href='" + path + flontPage + "'>上一页</a> ";
     }
     if (this.currentPage < getAllPage()) {
       int lastPage = this.currentPage + 1;
       str = str + "<a href='" + path + lastPage + "'>下一页</a> ";
       str = str + "<a href='" + path + getAllPage() + "'>末页</a> ";
     }
     str = str + "共" + getAllPage() + "页 ";
     return str;
   }
 }