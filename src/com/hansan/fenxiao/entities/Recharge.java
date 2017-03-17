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
 @Table(name="recharge")
 public class Recharge extends BaseBean
   implements Serializable
 {
   private static final long serialVersionUID = 1L;
   private Double money;
 
   @ManyToOne(cascade={javax.persistence.CascadeType.PERSIST}, fetch=FetchType.EAGER)
   @JoinColumn(name="user")
   @NotFound(action=NotFoundAction.IGNORE)
   private User user;
   private String no;
   private Integer status;
 
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
 }