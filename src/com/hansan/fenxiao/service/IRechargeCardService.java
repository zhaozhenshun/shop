package com.hansan.fenxiao.service;

import com.hansan.fenxiao.entities.RechargeCard;

public abstract interface IRechargeCardService<T extends RechargeCard> extends IBaseService<T>
{
  public abstract RechargeCard getByNo(String paramString);
}