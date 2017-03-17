 package com.hansan.fenxiao.service.impl;
 
 import com.hansan.fenxiao.dao.IBaseDao;
 import com.hansan.fenxiao.entities.BaseBean;
 import com.hansan.fenxiao.service.IBaseService;
 import java.util.List;
 import javax.annotation.Resource;
 import org.hibernate.Query;
 
 public class BaseServiceImpl<T extends BaseBean>
   implements IBaseService<T>
 {
 
   @Resource(name="baseDao")
   protected IBaseDao<T> baseDao;
 
   public T findById(Class<T> clazz, int id)
   {
     return (T)this.baseDao.findById(clazz, id);
   }
 
   public boolean saveOrUpdate(T baseBean)
   {
     return this.baseDao.saveOrUpdate(baseBean);
   }
 
   public boolean delete(T baseBean)
   {
     baseBean.setDeleted(true);
     return this.baseDao.saveOrUpdate(baseBean);
   }
 
   public List<T> list(String hql)
   {
     return this.baseDao.list(hql);
   }
 
   public List<T> list(String hql, int firstResult, int maxResult, Object[] params)
   {
     return this.baseDao.list(hql, firstResult, maxResult, params);
   }
 
   public int getTotalCount(String hql, Object[] params)
   {
     return this.baseDao.getTotalCount(hql, params);
   }
 
   public Query createQuery(String hql)
   {
     return this.baseDao.createQuery(hql);
   }
 
   public void deleteAll(String entity, String where)
   {
     this.baseDao.deleteAll(entity, where);
   }
 }