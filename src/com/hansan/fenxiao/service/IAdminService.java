package com.hansan.fenxiao.service;

import com.hansan.fenxiao.entities.Admin;

public abstract interface IAdminService<T extends Admin> extends IBaseService<T>
{
  public abstract Admin login(Admin paramAdmin);

  public abstract Admin getAdminName(String paramString);
}
