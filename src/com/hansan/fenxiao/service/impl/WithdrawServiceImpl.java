package com.hansan.fenxiao.service.impl;

import com.hansan.fenxiao.entities.Withdraw;
import com.hansan.fenxiao.service.IWithdrawService;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

@Service("withdrawService")
@Scope("prototype")
public class WithdrawServiceImpl<T extends Withdraw> extends BaseServiceImpl<T>
  implements IWithdrawService<T>
{
}