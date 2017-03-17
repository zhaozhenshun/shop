package com.hansan.fenxiao.dao;

import com.hansan.fenxiao.entities.Recharge;

public abstract interface IRechargeDao extends IBaseDao<Recharge>
{
  public abstract Recharge findByNo(String paramString);
}

