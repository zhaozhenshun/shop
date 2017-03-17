package com.hansan.fenxiao.dao.impl;

import com.hansan.fenxiao.dao.IWithdrawDao;
import com.hansan.fenxiao.entities.Withdraw;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

@Repository("withdrawDao")
@Scope("prototype")
public class WithdrawDaoImpl extends BaseDaoImpl<Withdraw>
  implements IWithdrawDao
{
}
