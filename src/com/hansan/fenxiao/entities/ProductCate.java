 package com.hansan.fenxiao.entities;
 
 import javax.persistence.Entity;
 import javax.persistence.Table;
 
 @Entity
 @Table(name="product_cate")
 public class ProductCate extends BaseBean
 {
   private String name;
   private int fatherId;
 
   public String getName()
   {
     return this.name;
   }
   public void setName(String name) {
     this.name = name;
   }
   public int getFatherId() {
     return this.fatherId;
   }
   public void setFatherId(int fatherId) {
     this.fatherId = fatherId;
   }
 }