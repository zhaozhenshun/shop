 package com.hansan.fenxiao.dao.impl;
 
 import com.hansan.fenxiao.dao.IFinancialDao;
 import com.hansan.fenxiao.entities.Financial;
 import java.util.List;
 import javax.annotation.Resource;
 import org.hibernate.Query;
 import org.hibernate.Session;
 import org.hibernate.SessionFactory;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Repository;
 
 @Repository("financialDao")
 @Scope("prototype")
 public class FinancialDaoImpl extends BaseDaoImpl<Financial>
   implements IFinancialDao
 {
 
   @Resource(name="sessionFactory")
   private SessionFactory sessionFactory;
 
   private Session getSession()
   {
     return this.sessionFactory.getCurrentSession();
   }
 
   public List<Financial> getByUser(Integer userId)
   {
     String hql = "from Financial where user.id=:userId and deleted=0";
 
     List financialList = getSession().createQuery(hql)
       .setInteger("userId", userId.intValue()).list();
     return financialList;
   }
 }
