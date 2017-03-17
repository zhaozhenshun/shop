 package com.hansan.fenxiao.service.impl;
 
 import com.hansan.fenxiao.dao.IUserDao;
 import com.hansan.fenxiao.entities.User;
 import com.hansan.fenxiao.service.IUserService;
 import java.util.List;
 import javax.annotation.Resource;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Service;
 
 @Service("userService")
 @Scope("prototype")
 public class UserServiceImpl<T extends User> extends BaseServiceImpl<T>
   implements IUserService<T>
 {
 
   @Resource(name="userDao")
   private IUserDao userDao;
 
   public User getUserByName(String name)
   {
     return this.userDao.getUserByName(name);
   }
 
   public User login(String name, String password)
   {
     return this.userDao.login(name, password);
   }
 
   public User getUserByPhone(String phone)
   {
     return this.userDao.getUserByPhone(phone);
   }
 
   public User getUserByNo(String no)
   {
     return this.userDao.getUserByNo(no);
   }
 
   public List<User> levelUserList(String no)
   {
     return this.userDao.levelUserList(no);
   }
 
   public List<User> levelUserTodayList(String no)
   {
     return this.userDao.levelUserTodayList(no);
   }
 
   public List<User> levelUserTodayStatusList(String no)
   {
     return this.userDao.levelUserTodayStatusList(no);
   }
 
   public User getUserByNameAndPhone(String name, String phone)
   {
     return this.userDao.getUserByNameAndPhone(name, phone);
   }
 }