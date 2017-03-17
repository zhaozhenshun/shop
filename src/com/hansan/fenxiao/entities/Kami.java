 package com.hansan.fenxiao.entities;
 
 import java.util.Date;
 import javax.persistence.Entity;
 import javax.persistence.FetchType;
 import javax.persistence.JoinColumn;
 import javax.persistence.ManyToOne;
 import javax.persistence.Table;
 import javax.persistence.Temporal;
 import javax.persistence.TemporalType;
 import org.hibernate.annotations.NotFound;
 import org.hibernate.annotations.NotFoundAction;
 
 @Entity
 @Table(name="kami")
 public class Kami extends BaseBean
 {
 
   @ManyToOne(cascade={javax.persistence.CascadeType.PERSIST, javax.persistence.CascadeType.MERGE}, fetch=FetchType.LAZY)
   @JoinColumn(name="product")
   @NotFound(action=NotFoundAction.IGNORE)
   private Product product;
   private String no;
   private String password;
   private Integer status;
 
   @Temporal(TemporalType.TIMESTAMP)
   private Date saleTime;
   private String ordersNo;
 
   public String getNo()
   {
     return this.no;
   }
   public void setNo(String no) {
     this.no = no;
   }
   public String getPassword() {
     return this.password;
   }
   public void setPassword(String password) {
     this.password = password;
   }
   public Integer getStatus() {
     return this.status;
   }
   public void setStatus(Integer status) {
     this.status = status;
   }
   public Date getSaleTime() {
     return this.saleTime;
   }
   public void setSaleTime(Date saleTime) {
     this.saleTime = saleTime;
   }
   public Product getProduct() {
     return this.product;
   }
   public void setProduct(Product product) {
     this.product = product;
   }
   public String getOrdersNo() {
     return this.ordersNo;
   }
   public void setOrdersNo(String ordersNo) {
     this.ordersNo = ordersNo;
   }
 }