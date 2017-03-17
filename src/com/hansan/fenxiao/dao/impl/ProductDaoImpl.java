package com.hansan.fenxiao.dao.impl;

import com.hansan.fenxiao.dao.IProductDao;
import com.hansan.fenxiao.entities.Product;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

@Repository("productDao")
@Scope("prototype")
public class ProductDaoImpl<T extends Product> extends BaseDaoImpl<T>
  implements IProductDao<T>
{
}
