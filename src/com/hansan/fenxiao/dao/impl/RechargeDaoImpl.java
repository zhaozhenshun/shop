 package com.hansan.fenxiao.dao.impl;
 
 import com.hansan.fenxiao.dao.IRechargeDao;
 import com.hansan.fenxiao.entities.Recharge;
 import javax.annotation.Resource;
 import org.hibernate.Query;
 import org.hibernate.Session;
 import org.hibernate.SessionFactory;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Repository;
 
 @Repository("rechargeDao")
 @Scope("prototype")
 public class RechargeDaoImpl extends BaseDaoImpl<Recharge>
   implements IRechargeDao
 {
 
   @Resource(name="sessionFactory")
   private SessionFactory sessionFactory;
 
   private Session getSession()
   {
     return this.sessionFactory.getCurrentSession();
   }
 
   public Recharge findByNo(String no) {
     String hql = "from Recharge where no=:no";
     Recharge recharge = (Recharge)getSession().createQuery(hql)
       .setString("no", no).uniqueResult();
     return recharge;
   }
 }

/* Location:           D:\360安全浏览器下载\WeFenxiao_A5\WeFenxiao_V1.0.1\WEB-INF\classes\
 * Qualified Name:     com.hansan.fenxiao.dao.impl.RechargeDaoImpl
 * JD-Core Version:    0.6.0
 */