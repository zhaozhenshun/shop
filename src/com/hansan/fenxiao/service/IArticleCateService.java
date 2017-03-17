package com.hansan.fenxiao.service;

import com.hansan.fenxiao.entities.ArticleCate;
import java.util.List;

public abstract interface IArticleCateService<T extends ArticleCate> extends IBaseService<T>
{
  public abstract List<T> listByFatherId(int paramInt);
}
