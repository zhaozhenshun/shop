 package com.hansan.fenxiao.service.impl;
 
 import com.hansan.fenxiao.dao.IAdminDao;
 import com.hansan.fenxiao.entities.Admin;
 import com.hansan.fenxiao.service.IAdminService;
 import javax.annotation.Resource;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Service;
 
 @Service("adminService")
 @Scope("prototype")
 public class AdminServiceImpl<T extends Admin> extends BaseServiceImpl<T>
   implements IAdminService<T>
 {
 
   @Resource(name="adminDao")
   private IAdminDao adminDao;
 
   public Admin login(Admin admin)
   {
     return this.adminDao.login(admin);
   }
 
   public Admin getAdminName(String name)
   {
     return this.adminDao.getAdminName(name);
   }
 }