 package com.hansan.fenxiao.entities;
 
 import java.io.Serializable;
 import java.util.Date;
 import javax.persistence.Entity;
 import javax.persistence.Table;
 import javax.persistence.Temporal;
 import javax.persistence.TemporalType;
 
 @Entity
 @Table(name="user")
 public class User extends BaseBean
   implements Serializable
 {
   private static final long serialVersionUID = 1L;
   private String no;
   private String name;
   private String phone;
   private String password;
   private Double balance;
   private Double commission;
   private String superior;
   private Integer status;
 
   @Temporal(TemporalType.TIMESTAMP)
   private Date statusDate;
 
   @Temporal(TemporalType.TIMESTAMP)
   private Date lastLoginTime;
   private String lastLoginIp;
   private String registerIp;
   private Integer loginCount;
 
   public String getName()
   {
     return this.name;
   }
   public void setName(String name) {
     this.name = name;
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
   public Date getLastLoginTime() {
     return this.lastLoginTime;
   }
   public void setLastLoginTime(Date lastLoginTime) {
     this.lastLoginTime = lastLoginTime;
   }
   public String getLastLoginIp() {
     return this.lastLoginIp;
   }
   public void setLastLoginIp(String lastLoginIp) {
     this.lastLoginIp = lastLoginIp;
   }
   public Integer getLoginCount() {
     return this.loginCount;
   }
   public void setLoginCount(Integer loginCount) {
     this.loginCount = loginCount;
   }
   public String getPhone() {
     return this.phone;
   }
   public void setPhone(String phone) {
     this.phone = phone;
   }
   public Double getBalance() {
     return this.balance;
   }
   public void setBalance(Double balance) {
     this.balance = balance;
   }
   public Double getCommission() {
     return this.commission;
   }
   public void setCommission(Double commission) {
     this.commission = commission;
   }
   public String getRegisterIp() {
     return this.registerIp;
   }
   public void setRegisterIp(String registerIp) {
     this.registerIp = registerIp;
   }
   public String getSuperior() {
     return this.superior;
   }
   public void setSuperior(String superior) {
     this.superior = superior;
   }
   public String getNo() {
     return this.no;
   }
   public void setNo(String no) {
     this.no = no;
   }
   public Date getStatusDate() {
     return this.statusDate;
   }
   public void setStatusDate(Date statusDate) {
     this.statusDate = statusDate;
   }
 }