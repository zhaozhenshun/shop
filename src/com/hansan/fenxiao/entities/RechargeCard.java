 package com.hansan.fenxiao.entities;
 
 import java.io.Serializable;
 import javax.persistence.Entity;
 import javax.persistence.Table;
 
 @Entity
 @Table(name="recharge_card")
 public class RechargeCard extends BaseBean
   implements Serializable
 {
   private static final long serialVersionUID = 1L;
   private String no;
   private double money;
   private Integer status;
   private String useTime;
   private String useUserNo;
 
   public String getNo()
   {
     return this.no;
   }
   public void setNo(String no) {
     this.no = no;
   }
   public double getMoney() {
     return this.money;
   }
   public void setMoney(double money) {
     this.money = money;
   }
   public Integer getStatus() {
     return this.status;
   }
   public void setStatus(Integer status) {
     this.status = status;
   }
   public String getUseTime() {
     return this.useTime;
   }
   public void setUseTime(String useTime) {
     this.useTime = useTime;
   }
   public String getUseUserNo() {
     return this.useUserNo;
   }
   public void setUseUserNo(String useUserNo) {
     this.useUserNo = useUserNo;
   }
 }

/* Location:           D:\360安全浏览器下载\WeFenxiao_A5\WeFenxiao_V1.0.1\WEB-INF\classes\
 * Qualified Name:     com.hansan.fenxiao.entities.RechargeCard
 * JD-Core Version:    0.6.0
 */