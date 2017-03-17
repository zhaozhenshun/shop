 package com.hansan.fenxiao.utils;
 
 public class BjuiPage
 {
   private int pageCurrent;
   private int pageSize;
   private int totalPage;
   private int totalCount;
 
   public BjuiPage(int pageCurrent, int pageSize)
   {
     setPageCurrent(pageCurrent);
     setPageSize(pageSize);
   }
 
   public int getTotalPage() {
     return this.totalPage;
   }
 
   public int getStart()
   {
     return (this.pageCurrent - 1) * this.pageSize;
   }
 
   public void setTotalPage(int totalPage) {
     this.totalPage = totalPage;
   }
 
   public void setTotalCount(int totalCount)
   {
     this.totalCount = totalCount;
     int temp = 0;
     if (totalCount % this.pageSize != 0) {
       temp++;
     }
     this.totalPage = (totalCount / this.pageSize + temp);
   }
 
   public int getTotalCount()
   {
     return this.totalCount;
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
 }