 package com.hansan.fenxiao.entities;
 
 import java.io.Serializable;
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
 @Table(name="orders")
 public class Orders extends BaseBean
   implements Serializable
 {
   private static final long serialVersionUID = 1L;
   private Double money;
 
   @ManyToOne(cascade={javax.persistence.CascadeType.PERSIST}, fetch=FetchType.EAGER)
   @JoinColumn(name="user")
   @NotFound(action=NotFoundAction.IGNORE)
   private User user;
   private String productId;
   private String productName;
   private Double productMoney;
   private Integer productNum;
   private String no;
   private Integer status;
   private String summary;
 
   @Temporal(TemporalType.TIMESTAMP)
   private Date payDate;
 
   public Double getMoney()
   {
     return this.money;
   }
   public void setMoney(Double money) {
     this.money = money;
   }
   public String getNo() {
     return this.no;
   }
   public void setNo(String no) {
     this.no = no;
   }
   public Integer getStatus() {
     return this.status;
   }
   public void setStatus(Integer status) {
     this.status = status;
   }
   public User getUser() {
     return this.user;
   }
   public void setUser(User user) {
     this.user = user;
   }
   public String getProductId() {
     return this.productId;
   }
   public void setProductId(String productId) {
     this.productId = productId;
   }
   public String getProductName() {
     return this.productName;
   }
   public void setProductName(String productName) {
     this.productName = productName;
   }
   public Integer getProductNum() {
     return this.productNum;
   }
   public void setProductNum(Integer productNum) {
     this.productNum = productNum;
   }
   public String getSummary() {
     return this.summary;
   }
   public void setSummary(String summary) {
     this.summary = summary;
   }
   public Double getProductMoney() {
     return this.productMoney;
   }
   public void setProductMoney(Double productMoney) {
     this.productMoney = productMoney;
   }
   public Date getPayDate() {
     return this.payDate;
   }
   public void setPayDate(Date payDate) {
     this.payDate = payDate;
   }
 }