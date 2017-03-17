package com.hansan.fenxiao.dao;

import com.hansan.fenxiao.entities.PhoneValidateCode;

public abstract interface IPhoneValidateCodeDao<T extends PhoneValidateCode> extends IBaseDao<T>
{
  public abstract PhoneValidateCode getPhoneValidateCode(String paramString1, String paramString2);
}

/* Location:           D:\360安全浏览器下载\WeFenxiao_A5\WeFenxiao_V1.0.1\WEB-INF\classes\
 * Qualified Name:     com.hansan.fenxiao.dao.IPhoneValidateCodeDao
 * JD-Core Version:    0.6.0
 */