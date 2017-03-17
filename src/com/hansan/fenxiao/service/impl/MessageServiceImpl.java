package com.hansan.fenxiao.service.impl;

import com.hansan.fenxiao.entities.Message;
import com.hansan.fenxiao.service.IMessageService;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

@Repository("messageService")
@Scope("prototype")
public class MessageServiceImpl<T extends Message> extends BaseServiceImpl<T>
  implements IMessageService<T>
{
}
