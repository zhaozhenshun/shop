 package com.hansan.fenxiao.dao.impl;
 
 import com.hansan.fenxiao.dao.IArticleCateDao;
 import com.hansan.fenxiao.entities.ArticleCate;
 import java.util.List;
 import org.hibernate.Query;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Repository;
 
 @Repository("articleCateDao")
 @Scope("prototype")
 public class ArticleCateDaoImpl<T extends ArticleCate> extends BaseDaoImpl<T>
   implements IArticleCateDao<T>
 {
   public List<T> listByFatherId(int fid)
   {
     String hql = "from ArticleCate where fatherId=" + fid;
     List list = createQuery(hql).list();
     return list;
   }
 }

/* Location:           D:\360安全浏览器下载\WeFenxiao_A5\WeFenxiao_V1.0.1\WEB-INF\classes\
 * Qualified Name:     com.hansan.fenxiao.dao.impl.ArticleCateDaoImpl
 * JD-Core Version:    0.6.0
 */