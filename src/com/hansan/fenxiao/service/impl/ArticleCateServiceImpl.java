 package com.hansan.fenxiao.service.impl;
 
 import com.hansan.fenxiao.dao.IArticleCateDao;
 import com.hansan.fenxiao.entities.ArticleCate;
 import com.hansan.fenxiao.service.IArticleCateService;
 import java.util.List;
 import javax.annotation.Resource;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Repository;
 
 @Repository("articleCateService")
 @Scope("prototype")
 public class ArticleCateServiceImpl<T extends ArticleCate> extends BaseServiceImpl<T>
   implements IArticleCateService<T>
 {
 
   @Resource(name="articleCateDao")
   private IArticleCateDao<T> articleCateDao;
 
   public List<T> listByFatherId(int fid)
   {
     return this.articleCateDao.listByFatherId(fid);
   }
 }