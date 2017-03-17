package com.hansan.fenxiao.service;

import com.hansan.fenxiao.entities.Financial;
import java.util.List;

public abstract interface IFinancialService<T extends Financial> extends IBaseService<T>
{
  public abstract List<Financial> getByUser(Integer paramInteger);
}