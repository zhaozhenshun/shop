 package com.hansan.fenxiao.service.impl;
 
 import com.hansan.fenxiao.dao.ICommissionDao;
 import com.hansan.fenxiao.entities.Commission;
 import com.hansan.fenxiao.service.ICommissionService;
 import java.util.List;
 import javax.annotation.Resource;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Service;
 
 @Service("commissionService")
 @Scope("prototype")
 public class CommissionServiceImpl<T extends Commission> extends BaseServiceImpl<T>
   implements ICommissionService<T>
 {
 
   @Resource(name="commissionDao")
   private ICommissionDao commissionDao;
 
   public List<Commission> getByUser(Integer userId)
   {
     return this.commissionDao.getByUser(userId);
   }
 }