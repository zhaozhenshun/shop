package com.hansan.fenxiao.service.impl;

import com.hansan.fenxiao.entities.Config;
import com.hansan.fenxiao.service.IConfigService;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

@Service("configService")
@Scope("prototype")
public class ConfigServiceImpl<T extends Config> extends BaseServiceImpl<T>
  implements IConfigService<T>
{
}