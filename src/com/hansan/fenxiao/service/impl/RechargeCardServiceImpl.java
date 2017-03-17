 package com.hansan.fenxiao.service.impl;
 
 import com.hansan.fenxiao.dao.IRechargeCardDao;
 import com.hansan.fenxiao.entities.RechargeCard;
 import com.hansan.fenxiao.service.IRechargeCardService;
 import javax.annotation.Resource;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Service;
 
 @Service("rechargeCardService")
 @Scope("prototype")
 public class RechargeCardServiceImpl<T extends RechargeCard> extends BaseServiceImpl<T>
   implements IRechargeCardService<T>
 {
 
   @Resource(name="rechargeCardDao")
   IRechargeCardDao rechargeCardDao;
 
   public RechargeCard getByNo(String no)
   {
     return this.rechargeCardDao.getByNo(no);
   }
 }