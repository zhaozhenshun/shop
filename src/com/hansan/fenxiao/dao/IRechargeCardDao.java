package com.hansan.fenxiao.dao;

import com.hansan.fenxiao.entities.RechargeCard;

public abstract interface IRechargeCardDao extends IBaseDao<RechargeCard>
{
  public abstract RechargeCard getByNo(String paramString);
}
