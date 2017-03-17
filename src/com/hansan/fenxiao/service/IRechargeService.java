package com.hansan.fenxiao.service;

import com.hansan.fenxiao.entities.Recharge;

public abstract interface IRechargeService<T extends Recharge> extends IBaseService<T>
{
  public abstract Recharge findByNo(String paramString);
}