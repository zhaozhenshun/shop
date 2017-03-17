 package com.hansan.fenxiao.dao.impl;
 
 import com.hansan.fenxiao.dao.IUserDao;
 import com.hansan.fenxiao.entities.User;
 import java.util.List;
 import javax.annotation.Resource;
 import org.hibernate.Query;
 import org.hibernate.Session;
 import org.hibernate.SessionFactory;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Repository;
 
 @Repository("userDao")
 @Scope("prototype")
 public class UserDaoImpl extends BaseDaoImpl<User>
   implements IUserDao
 {
 
   @Resource(name="sessionFactory")
   private SessionFactory sessionFactory;
 
   private Session getSession()
   {
     return this.sessionFactory.getCurrentSession();
   }
 
   public User getUserByName(String name)
   {
     String hql = "from User where name=:name and deleted=0";
     User user = (User)getSession().createQuery(hql)
       .setString("name", name).uniqueResult();
     return user;
   }
 
   public User login(String name, String password)
   {
     String hql = "from User where name=:name and password=:password and deleted=0";
     User user = (User)getSession().createQuery(hql)
       .setString("name", name).setString("password", password).uniqueResult();
     return user;
   }
 
   public User getUserByPhone(String phone)
   {
     String hql = "from User where phone=:phone and deleted=0";
     User user = (User)getSession().createQuery(hql)
       .setString("phone", phone).uniqueResult();
     return user;
   }
 
   public User getUserByNo(String no)
   {
     String hql = "from User where no=:no and deleted=0";
     User user = (User)getSession().createQuery(hql)
       .setString("no", no).uniqueResult();
     return user;
   }
 
   public List<User> levelUserList(String no)
   {
     String hql = "from User where superior like :no and deleted=0";
 
     List levelUserList = getSession().createQuery(hql)
       .setString("no", "%;" + no + ";%").list();
     return levelUserList;
   }
 
   public List<User> levelUserTodayList(String no)
   {
     String hql = "from User where superior like '%:no%' and deleted=0 and date(createDate)=curdate()";
 
     List levelUserTodayList = getSession().createQuery(hql)
       .setString("no", no).list();
     return levelUserTodayList;
   }
 
   public List<User> levelUserTodayStatusList(String no)
   {
     String hql = "from User where superior like '%:no%' and deleted=0 and date(statusDate)=curdate()";
 
     List levelUserTodayStatusList = getSession().createQuery(hql)
       .setString("no", no).list();
     return levelUserTodayStatusList;
   }
 
   public User getUserByNameAndPhone(String name, String phone)
   {
     String hql = "from User where name=:name and phone=:phone and deleted=0";
     User user = (User)getSession().createQuery(hql)
       .setString("name", name).setString("phone", phone).uniqueResult();
     return user;
   }
 }