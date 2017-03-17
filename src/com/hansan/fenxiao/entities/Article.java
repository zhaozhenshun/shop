 package com.hansan.fenxiao.entities;
 
 import javax.persistence.Entity;
 import javax.persistence.FetchType;
 import javax.persistence.JoinColumn;
 import javax.persistence.ManyToOne;
 import javax.persistence.Table;
 import org.hibernate.annotations.NotFound;
 import org.hibernate.annotations.NotFoundAction;
 
 @Entity
 @Table(name="article")
 public class Article extends BaseBean
 {
 
   @ManyToOne(cascade={javax.persistence.CascadeType.PERSIST}, fetch=FetchType.EAGER)
   @JoinColumn(name="article_cate")
   @NotFound(action=NotFoundAction.IGNORE)
   private ArticleCate articleCate;
   private String title;
   private String summary;
 
   @JoinColumn(columnDefinition="text")
   private String content;
   private Integer views;
   private Integer status;
 
   public ArticleCate getArticleCate()
   {
     return this.articleCate;
   }
 
   public void setArticleCate(ArticleCate articleCate) {
     this.articleCate = articleCate;
   }
 
   public String getTitle() {
     return this.title;
   }
 
   public void setTitle(String title) {
     this.title = title;
   }
 
   public String getContent() {
     return this.content;
   }
 
   public void setContent(String content) {
     this.content = content;
   }
 
   public Integer getViews() {
     return this.views;
   }
 
   public void setViews(Integer views) {
     this.views = views;
   }
 
   public Integer getStatus() {
     return this.status;
   }
 
   public void setStatus(Integer status) {
     this.status = status;
   }
 
   public String getSummary() {
     return this.summary;
   }
 
   public void setSummary(String summary) {
     this.summary = summary;
   }
 }