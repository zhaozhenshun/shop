package com.hansan.fenxiao.dao;

import java.util.List;
import org.hibernate.Query;

public abstract interface IBaseDao<T>
{
  public abstract T findById(Class<T> paramClass, int paramInt);

  public abstract boolean saveOrUpdate(T paramT);

  public abstract boolean delete(T paramT);

  public abstract void deleteAll(String paramString1, String paramString2);

  public abstract List<T> list(String paramString);

  public abstract List<T> list(String paramString, int paramInt1, int paramInt2, Object[] paramArrayOfObject);

  public abstract int getTotalCount(String paramString, Object[] paramArrayOfObject);

  public abstract Query createQuery(String paramString);
}
