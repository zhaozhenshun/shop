 package com.hansan.fenxiao.service.impl;
 
 import com.hansan.fenxiao.dao.IOrdersDao;
 import com.hansan.fenxiao.entities.Orders;
 import com.hansan.fenxiao.service.IOrdersService;
 import javax.annotation.Resource;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Service;
 
 @Service("ordersService")
 @Scope("prototype")
 public class OrdersServiceImpl<T extends Orders> extends BaseServiceImpl<T>
   implements IOrdersService<T>
 {
 
   @Resource(name="ordersDao")
   private IOrdersDao ordersDao;
 
   public Orders findByNo(String no)
   {
     return this.ordersDao.findByNo(no);
   }
 }
