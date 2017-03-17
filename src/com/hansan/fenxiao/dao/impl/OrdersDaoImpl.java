/*    */ package com.hansan.fenxiao.dao.impl;
/*    */ 
/*    */ import com.hansan.fenxiao.dao.IOrdersDao;
/*    */ import com.hansan.fenxiao.entities.Orders;
/*    */ import javax.annotation.Resource;
/*    */ import org.hibernate.Query;
/*    */ import org.hibernate.Session;
/*    */ import org.hibernate.SessionFactory;
/*    */ import org.springframework.context.annotation.Scope;
/*    */ import org.springframework.stereotype.Repository;
/*    */ 
/*    */ @Repository("ordersDao")
/*    */ @Scope("prototype")
/*    */ public class OrdersDaoImpl extends BaseDaoImpl<Orders>
/*    */   implements IOrdersDao
/*    */ {
/*    */ 
/*    */   @Resource(name="sessionFactory")
/*    */   private SessionFactory sessionFactory;
/*    */ 
/*    */   private Session getSession()
/*    */   {
/* 26 */     return this.sessionFactory.getCurrentSession();
/*    */   }
/*    */ 
/*    */   public Orders findByNo(String no) {
/* 30 */     String hql = "from Orders where no=:no";
/* 31 */     Orders orders = (Orders)getSession().createQuery(hql)
/* 32 */       .setString("no", no).uniqueResult();
/* 33 */     return orders;
/*    */   }
/*    */ }
