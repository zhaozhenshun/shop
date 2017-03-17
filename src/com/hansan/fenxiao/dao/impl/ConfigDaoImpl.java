package com.hansan.fenxiao.dao.impl;

import com.hansan.fenxiao.dao.IConfigDao;
import com.hansan.fenxiao.entities.Config;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

@Repository("configDao")
@Scope("prototype")
public class ConfigDaoImpl extends BaseDaoImpl<Config>
  implements IConfigDao
{
}
