package com.hansan.fenxiao.dao;

import com.hansan.fenxiao.entities.Admin;

public abstract interface IAdminDao extends IBaseDao<Admin>
{
  public abstract Admin login(Admin paramAdmin);

  public abstract Admin getAdminName(String paramString);
}
