package com.hansan.fenxiao.dao;

import com.hansan.fenxiao.entities.Orders;

public abstract interface IOrdersDao extends IBaseDao<Orders>
{
  public abstract Orders findByNo(String paramString);
}

