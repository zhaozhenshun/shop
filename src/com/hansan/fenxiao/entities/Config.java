 package com.hansan.fenxiao.entities;
 
 import java.io.Serializable;
 import javax.persistence.Entity;
 import javax.persistence.Table;
 
 @Entity
 @Table(name="config")
 public class Config extends BaseBean
   implements Serializable
 {
   private static final long serialVersionUID = 1L;
   private String logo;
   private String siteName;
   private String siteUrl;
   private String siteKeys;
   private String siteDescription;
   private String address;
   private String phone;
   private String qq;
   private String weixin;
   private String weibo;
   private String email;
   private String sendEmail;
   private String sendEmailPass;
   private String sendEmailSmtp;
   private Double firstLevel;
   private Double secondLevel;
   private Double thirdLevel;
   private String downloadUrl;
   private String alipayPartner;
   private String alipaySellerEmail;
   private String alipayKey;
   private Integer onlinePayIsOpen;
   private Integer rechargeCardIsOpen;
 
   public String getLogo()
   {
     return this.logo;
   }
   public void setLogo(String logo) {
     this.logo = logo;
   }
   public String getSiteName() {
     return this.siteName;
   }
   public void setSiteName(String siteName) {
     this.siteName = siteName;
   }
   public String getSiteUrl() {
     return this.siteUrl;
   }
   public void setSiteUrl(String siteUrl) {
     this.siteUrl = siteUrl;
   }
   public String getSiteKeys() {
     return this.siteKeys;
   }
   public void setSiteKeys(String siteKeys) {
     this.siteKeys = siteKeys;
   }
   public String getSiteDescription() {
     return this.siteDescription;
   }
   public void setSiteDescription(String siteDescription) {
     this.siteDescription = siteDescription;
   }
   public String getAddress() {
     return this.address;
   }
   public void setAddress(String address) {
     this.address = address;
   }
   public String getPhone() {
     return this.phone;
   }
   public void setPhone(String phone) {
     this.phone = phone;
   }
   public String getQq() {
     return this.qq;
   }
   public void setQq(String qq) {
     this.qq = qq;
   }
   public String getWeixin() {
     return this.weixin;
   }
   public void setWeixin(String weixin) {
     this.weixin = weixin;
   }
   public String getWeibo() {
     return this.weibo;
   }
   public void setWeibo(String weibo) {
     this.weibo = weibo;
   }
   public String getEmail() {
     return this.email;
   }
   public void setEmail(String email) {
     this.email = email;
   }
   public String getSendEmail() {
     return this.sendEmail;
   }
   public void setSendEmail(String sendEmail) {
     this.sendEmail = sendEmail;
   }
   public String getSendEmailPass() {
     return this.sendEmailPass;
   }
   public void setSendEmailPass(String sendEmailPass) {
     this.sendEmailPass = sendEmailPass;
   }
   public String getSendEmailSmtp() {
     return this.sendEmailSmtp;
   }
   public void setSendEmailSmtp(String sendEmailSmtp) {
     this.sendEmailSmtp = sendEmailSmtp;
   }
   public Double getFirstLevel() {
     return this.firstLevel;
   }
   public void setFirstLevel(Double firstLevel) {
     this.firstLevel = firstLevel;
   }
   public Double getSecondLevel() {
     return this.secondLevel;
   }
   public void setSecondLevel(Double secondLevel) {
     this.secondLevel = secondLevel;
   }
   public Double getThirdLevel() {
     return this.thirdLevel;
   }
   public void setThirdLevel(Double thirdLevel) {
     this.thirdLevel = thirdLevel;
   }
   public String getDownloadUrl() {
     return this.downloadUrl;
   }
   public void setDownloadUrl(String downloadUrl) {
     this.downloadUrl = downloadUrl;
   }
   public String getAlipayPartner() {
     return this.alipayPartner;
   }
   public void setAlipayPartner(String alipayPartner) {
     this.alipayPartner = alipayPartner;
   }
   public String getAlipaySellerEmail() {
     return this.alipaySellerEmail;
   }
   public void setAlipaySellerEmail(String alipaySellerEmail) {
     this.alipaySellerEmail = alipaySellerEmail;
   }
   public String getAlipayKey() {
     return this.alipayKey;
   }
   public void setAlipayKey(String alipayKey) {
     this.alipayKey = alipayKey;
   }
   public Integer getOnlinePayIsOpen() {
     return this.onlinePayIsOpen;
   }
   public void setOnlinePayIsOpen(Integer onlinePayIsOpen) {
     this.onlinePayIsOpen = onlinePayIsOpen;
   }
   public Integer getRechargeCardIsOpen() {
     return this.rechargeCardIsOpen;
   }
   public void setRechargeCardIsOpen(Integer rechargeCardIsOpen) {
     this.rechargeCardIsOpen = rechargeCardIsOpen;
   }
 }
