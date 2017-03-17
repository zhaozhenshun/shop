 package com.hansan.fenxiao.entities;
 
 import java.util.Date;
 import javax.persistence.Column;
 import javax.persistence.GeneratedValue;
 import javax.persistence.GenerationType;
 import javax.persistence.Id;
 import javax.persistence.MappedSuperclass;
 import javax.persistence.Temporal;
 import javax.persistence.TemporalType;
 import javax.persistence.Version;
 
 @MappedSuperclass
 public class BaseBean
 {
 
   @Id
   @GeneratedValue(strategy=GenerationType.IDENTITY)
   @Column(name="id", nullable=false)
   protected Integer id;
   private boolean deleted;
 
   @Temporal(TemporalType.TIMESTAMP)
   private Date createDate;
 
   @Version
   private int version;
 
   public Integer getId()
   {
     return this.id;
   }
   public void setId(Integer id) {
     this.id = id;
   }
   public boolean isDeleted() {
     return this.deleted;
   }
   public void setDeleted(boolean deleted) {
     this.deleted = deleted;
   }
   public Date getCreateDate() {
     return this.createDate;
   }
   public void setCreateDate(Date createDate) {
     this.createDate = createDate;
   }
   public int getVersion() {
     return this.version;
   }
   public void setVersion(int version) {
     this.version = version;
   }
 }