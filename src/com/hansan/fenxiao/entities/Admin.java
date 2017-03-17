 package com.hansan.fenxiao.entities;
 
 import java.io.Serializable;
 import java.util.Date;
 import javax.persistence.Column;
 import javax.persistence.Entity;
 import javax.persistence.Table;
 import javax.persistence.Temporal;
 import javax.persistence.TemporalType;
 
 @Entity
 @Table(name="admin")
 public class Admin extends BaseBean
   implements Serializable
 {
   private static final long serialVersionUID = 1L;
   private String name;
   private String password;
   private Integer status;
 
   @Column(columnDefinition="int default 0", name="juri", nullable=false)
   private int juri;
 
   @Temporal(TemporalType.TIMESTAMP)
   private Date lastLoginTime;
   private String lastLoginIp;
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
   public int getJuri() {
     return this.juri;
   }
   public void setJuri(int juri) {
     this.juri = juri;
   }
 }

