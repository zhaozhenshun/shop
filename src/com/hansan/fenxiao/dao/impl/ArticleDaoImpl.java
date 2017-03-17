package com.hansan.fenxiao.dao.impl;

import com.hansan.fenxiao.dao.IArticleDao;
import com.hansan.fenxiao.entities.Article;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

@Repository("articleDao")
@Scope("prototype")
public class ArticleDaoImpl<T extends Article> extends BaseDaoImpl<T>
  implements IArticleDao<T>
{
}