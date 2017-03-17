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
 @Table(name="withdraw")
 public class Withdraw extends BaseBean
   implements Serializable
 {
   private static final long serialVersionUID = 1L;
   private Double money;
 
   @ManyToOne(cascade={javax.persistence.CascadeType.PERSIST}, fetch=FetchType.EAGER)
   @JoinColumn(name="user")
   @NotFound(action=NotFoundAction.IGNORE)
   private User user;
   private String phone;
   private String bank;
   private String bankName;
   private String bankNo;
   private String bankAddress;
   private Integer status;
 
   public Double getMoney()
   {
     return this.money;
   }
   public void setMoney(Double money) {
     this.money = money;
   }
   public String getBank() {
     return this.bank;
   }
   public void setBank(String bank) {
     this.bank = bank;
   }
   public String getBankName() {
     return this.bankName;
   }
   public void setBankName(String bankName) {
     this.bankName = bankName;
   }
   public String getBankNo() {
     return this.bankNo;
   }
   public void setBankNo(String bankNo) {
     this.bankNo = bankNo;
   }
   public User getUser() {
     return this.user;
   }
   public void setUser(User user) {
     this.user = user;
   }
   public Integer getStatus() {
     return this.status;
   }
   public void setStatus(Integer status) {
     this.status = status;
   }
   public String getBankAddress() {
     return this.bankAddress;
   }
   public void setBankAddress(String bankAddress) {
     this.bankAddress = bankAddress;
   }
   public String getPhone() {
     return this.phone;
   }
   public void setPhone(String phone) {
     this.phone = phone;
   }
 }