package com.hansan.fenxiao.service;

import com.hansan.fenxiao.entities.Orders;

public abstract interface IOrdersService<T extends Orders> extends IBaseService<T>
{
  public abstract Orders findByNo(String paramString);
}