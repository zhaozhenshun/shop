package com.hansan.fenxiao.dao.impl;

import com.hansan.fenxiao.dao.IKamiDao;
import com.hansan.fenxiao.entities.Kami;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

@Repository("kamiDao")
@Scope("prototype")
public class KamiDaoImpl<T extends Kami> extends BaseDaoImpl<T>
  implements IKamiDao<T>
{
}