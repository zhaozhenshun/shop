 package com.hansan.fenxiao.service.impl;
 
 import com.hansan.fenxiao.dao.IFinancialDao;
 import com.hansan.fenxiao.entities.Financial;
 import com.hansan.fenxiao.service.IFinancialService;
 import java.util.List;
 import javax.annotation.Resource;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Service;
 
 @Service("financialService")
 @Scope("prototype")
 public class FinancialServiceImpl<T extends Financial> extends BaseServiceImpl<T>
   implements IFinancialService<T>
 {
 
   @Resource(name="financialDao")
   private IFinancialDao financialDao;
 
   public List<Financial> getByUser(Integer userId)
   {
     return this.financialDao.getByUser(userId);
   }
 }