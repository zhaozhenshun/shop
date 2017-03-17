 package com.hansan.fenxiao.service.impl;
 
 import com.hansan.fenxiao.dao.IProductCateDao;
 import com.hansan.fenxiao.entities.Product;
 import com.hansan.fenxiao.entities.ProductCate;
 import com.hansan.fenxiao.service.IProductCateService;
 import com.hansan.fenxiao.service.IProductService;
 import java.util.List;
 import javax.annotation.Resource;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Repository;
 
 @Repository("productCateService")
 @Scope("prototype")
 public class ProductCateServiceImpl<T extends ProductCate> extends BaseServiceImpl<T>
   implements IProductCateService<T>
 {
 
   @Resource(name="productCateDao")
   private IProductCateDao<T> productCateDao;
 
   @Resource(name="productService")
   private IProductService<Product> productService;
 
   public boolean delete(T baseBean)
   {
     return this.productCateDao.delete(baseBean);
   }
 
   public List<T> listByFatherId(int fid)
   {
     return this.productCateDao.listByFatherId(fid);
   }
 }