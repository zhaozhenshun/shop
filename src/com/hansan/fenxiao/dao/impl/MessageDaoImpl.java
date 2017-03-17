package com.hansan.fenxiao.dao.impl;

import com.hansan.fenxiao.dao.IMessageDao;
import com.hansan.fenxiao.entities.Message;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

@Repository("messageDao")
@Scope("prototype")
public class MessageDaoImpl<T extends Message> extends BaseDaoImpl<T>
  implements IMessageDao<T>
{
}
