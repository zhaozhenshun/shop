package com.hansan.fenxiao.service;

import com.hansan.fenxiao.entities.PhoneValidateCode;

public abstract interface IPhoneValidateCodeService<T extends PhoneValidateCode> extends IBaseService<T>
{
  public abstract PhoneValidateCode getPhoneValidateCode(String paramString1, String paramString2);
}