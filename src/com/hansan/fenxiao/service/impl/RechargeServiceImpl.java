 package com.hansan.fenxiao.service.impl;
 
 import com.hansan.fenxiao.dao.IRechargeDao;
 import com.hansan.fenxiao.entities.Recharge;
 import com.hansan.fenxiao.service.IRechargeService;
 import javax.annotation.Resource;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Service;
 
 @Service("rechargeService")
 @Scope("prototype")
 public class RechargeServiceImpl<T extends Recharge> extends BaseServiceImpl<T>
   implements IRechargeService<T>
 {
 
   @Resource(name="rechargeDao")
   private IRechargeDao rechargeDao;
 
   public Recharge findByNo(String no)
   {
     return this.rechargeDao.findByNo(no);
   }
 }
