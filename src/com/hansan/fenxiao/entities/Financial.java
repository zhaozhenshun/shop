 package com.hansan.fenxiao.entities;
 
 import java.io.Serializable;
 import javax.persistence.Entity;
 import javax.persistence.FetchType;
 import javax.persistence.JoinColumn;
 import javax.persistence.ManyToOne;
 import javax.persistence.Table;
 import org.hibernate.annotations.NotFound;
 import org.hibernate.annotations.NotFoundAction;
 
 @Entity
 @Table(name="financial")
 public class Financial extends BaseBean
   implements Serializable
 {
   private static final long serialVersionUID = 1L;
 
   @ManyToOne(cascade={javax.persistence.CascadeType.PERSIST}, fetch=FetchType.EAGER)
   @JoinColumn(name="user")
   @NotFound(action=NotFoundAction.IGNORE)
   private User user;
   private Integer type;
   private Double money;
   private Double balance;
   private String no;
   private String payment;
   private String remark;
   private String operator;
 
   public User getUser()
   {
     return this.user;
   }
   public void setUser(User user) {
     this.user = user;
   }
   public Integer getType() {
     return this.type;
   }
   public void setType(Integer type) {
     this.type = type;
   }
   public Double getMoney() {
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
   public String getPayment() {
     return this.payment;
   }
   public void setPayment(String payment) {
     this.payment = payment;
   }
   public String getRemark() {
     return this.remark;
   }
   public void setRemark(String remark) {
     this.remark = remark;
   }
   public String getOperator() {
     return this.operator;
   }
   public void setOperator(String operator) {
     this.operator = operator;
   }
   public Double getBalance() {
     return this.balance;
   }
   public void setBalance(Double balance) {
     this.balance = balance;
   }
 }