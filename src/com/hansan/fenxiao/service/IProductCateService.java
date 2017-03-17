package com.hansan.fenxiao.service;

import com.hansan.fenxiao.entities.ProductCate;
import java.util.List;

public abstract interface IProductCateService<T extends ProductCate> extends IBaseService<T>
{
  public abstract List<T> listByFatherId(int paramInt);
}