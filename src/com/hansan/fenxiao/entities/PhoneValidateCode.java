 package com.hansan.fenxiao.entities;
 
 import javax.persistence.Entity;
 import javax.persistence.Table;
 
 @Entity
 @Table(name="phone_validate_code")
 public class PhoneValidateCode extends BaseBean
 {
   private String phone;
   private String code;
   private Integer status;
 
   public String getPhone()
   {
     return this.phone;
   }
   public void setPhone(String phone) {
     this.phone = phone;
   }
   public String getCode() {
     return this.code;
   }
   public void setCode(String code) {
     this.code = code;
   }
   public Integer getStatus() {
     return this.status;
   }
   public void setStatus(Integer status) {
     this.status = status;
   }
 }