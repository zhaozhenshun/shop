 package com.hansan.fenxiao.entities;
 
 import javax.persistence.Entity;
 import javax.persistence.FetchType;
 import javax.persistence.JoinColumn;
 import javax.persistence.ManyToOne;
 import javax.persistence.Table;
 import org.hibernate.annotations.NotFound;
 import org.hibernate.annotations.NotFoundAction;
 
 @Entity
 @Table(name="product")
 public class Product extends BaseBean
 {
 
   @ManyToOne(cascade={javax.persistence.CascadeType.PERSIST, javax.persistence.CascadeType.MERGE}, fetch=FetchType.LAZY)
   @JoinColumn(name="product_cate")
   @NotFound(action=NotFoundAction.IGNORE)
   private ProductCate productCate;
   private String picture;
   private String title;
 
   @JoinColumn(columnDefinition="text")
   private String content;
   private Double bills;
   private Double money;
 
   public Product()
   {
   }
 
   public Product(Integer id, String picture, String title, Double bills, Double money)
   {
     this.id = id;
     this.picture = picture;
     this.title = title;
     this.bills = bills;
     this.money = money;
   }
 
   public String getTitle() {
     return this.title;
   }
 
   public void setTitle(String title) {
     this.title = title;
   }
 
   public String getContent() {
     return this.content;
   }
 
   public void setContent(String content) {
     this.content = content;
   }
 
   public String getPicture() {
     return this.picture;
   }
 
   public void setPicture(String picture) {
     this.picture = picture;
   }
 
   public ProductCate getProductCate() {
     return this.productCate;
   }
   public void setProductCate(ProductCate productCate) {
     this.productCate = productCate;
   }
 
   public Double getBills() {
     return this.bills;
   }
 
   public void setBills(Double bills) {
     this.bills = bills;
   }
 
   public Double getMoney() {
     return this.money;
   }
 
   public void setMoney(Double money) {
     this.money = money;
   }
 }