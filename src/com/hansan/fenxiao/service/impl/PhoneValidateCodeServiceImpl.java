 package com.hansan.fenxiao.service.impl;
 
 import com.hansan.fenxiao.dao.IPhoneValidateCodeDao;
 import com.hansan.fenxiao.entities.PhoneValidateCode;
 import com.hansan.fenxiao.service.IPhoneValidateCodeService;
 import javax.annotation.Resource;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Repository;
 
 @Repository("phoneValidateCodeService")
 @Scope("prototype")
 public class PhoneValidateCodeServiceImpl<T extends PhoneValidateCode> extends BaseServiceImpl<T>
   implements IPhoneValidateCodeService<T>
 {
 
   @Resource(name="phoneValidateCodeDao")
   private IPhoneValidateCodeDao<PhoneValidateCode> phoneValidateCodeDao;
 
   public PhoneValidateCode getPhoneValidateCode(String phone, String code)
   {
     return this.phoneValidateCodeDao.getPhoneValidateCode(phone, code);
   }
 }