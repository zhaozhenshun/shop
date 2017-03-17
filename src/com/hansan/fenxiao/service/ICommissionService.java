package com.hansan.fenxiao.service;

import com.hansan.fenxiao.entities.Commission;
import java.util.List;

public abstract interface ICommissionService<T extends Commission> extends IBaseService<T>
{
  public abstract List<Commission> getByUser(Integer paramInteger);
}