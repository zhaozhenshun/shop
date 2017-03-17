package com.hansan.fenxiao.dao.impl;

import com.hansan.fenxiao.dao.ICommissionDao;
import com.hansan.fenxiao.entities.Commission;
import java.util.List;
import javax.annotation.Resource;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

@Repository("commissionDao")
@Scope("prototype")
public class CommissionDaoImpl extends BaseDaoImpl<Commission>
  implements ICommissionDao
{

  @Resource(name="sessionFactory")
  private SessionFactory sessionFactory;

  private Session getSession()
  {
    return this.sessionFactory.getCurrentSession();
  }

  public List<Commission> getByUser(Integer userId)
  {
    String hql = "from Commission where user.id=:userId and deleted=0";

    List commissionList = getSession().createQuery(hql)
      .setInteger("userId", userId.intValue()).list();
    return commissionList;
  }
}
