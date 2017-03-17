 package com.hansan.fenxiao.service.impl;
 
 import com.hansan.fenxiao.dao.IBaseDao;
 import com.hansan.fenxiao.entities.Kami;
 import com.hansan.fenxiao.entities.Product;
 import com.hansan.fenxiao.service.IKamiService;
 import com.hansan.fenxiao.service.IProductService;
 import javax.annotation.Resource;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Repository;
 
 @Repository("productService")
 @Scope("prototype")
 public class ProductServiceImpl<T extends Product> extends BaseServiceImpl<T>
   implements IProductService<T>
 {
 
   @Resource(name="kamiService")
   private IKamiService<Kami> kamiService;
 
   public boolean delete(T baseBean)
   {
     return this.baseDao.delete(baseBean);
   }
 }
