package com.hansan.fenxiao.action;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.hansan.fenxiao.entities.Config;
import com.hansan.fenxiao.entities.Product;
import com.hansan.fenxiao.entities.ProductCate;
import com.hansan.fenxiao.service.IConfigService;
import com.hansan.fenxiao.service.IProductCateService;
import com.hansan.fenxiao.service.IProductService;
import com.hansan.fenxiao.utils.BjuiJson;
import com.hansan.fenxiao.utils.BjuiPage;
import com.hansan.fenxiao.utils.FreemarkerUtils;
import com.hansan.fenxiao.utils.PageModel;
import freemarker.template.Configuration;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONException;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

@Controller("productAction")
@Scope("prototype")
public class ProductAction extends BaseAction
{
  private static final long serialVersionUID = 1L;

  @Resource(name="productService")
  private IProductService<Product> productService;

  @Resource(name="productCateService")
  private IProductCateService<ProductCate> productCateService;

  @Resource(name="configService")
  private IConfigService<Config> configService;
  private Product product;

  public void list()
  {
    String key = this.request.getParameter("key");

    int count = 0;
    if (("".equals(key)) || (key == null)) {
      count = this.productService.getTotalCount("select count(*) from Product where deleted=0", new Object[0]);
      key = "";
    } else {
      count = this.productService.getTotalCount("from Product where title like '%" + key + "%' and deleted=0", new Object[0]);
    }

    this.page = new BjuiPage(this.pageCurrent, this.pageSize);
    this.page.setTotalCount(count);
    List list = this.productService.list("from Product where deleted=0 order by id desc", this.page.getStart(), this.page.getPageSize(), new Object[0]);
    this.cfg = new Configuration();

    this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
      "WEB-INF/templates/admin");
    Map root = new HashMap();
    root.put("list", list);
    root.put("page", this.page);
    FreemarkerUtils.freemarker(this.request, this.response, "productList.ftl", this.cfg, root);
  }

  public void add() {
    List<ProductCate> productCatelist = this.productCateService.list("from ProductCate where deleted=0");
    String zNodes = "";
    for (ProductCate productCate : productCatelist) {
      zNodes = zNodes + "<li data-id='" + productCate.getId() + "' data-pid='" + productCate.getFatherId() + "' data-tabid='" + productCate.getId() + "'>" + productCate.getName() + "</li>";
    }
    this.cfg = new Configuration();

    this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
      "WEB-INF/templates/admin");
    Map root = new HashMap();
    root.put("zNodes", zNodes);
    FreemarkerUtils.freemarker(this.request, this.response, "productAdd.ftl", this.cfg, root);
  }

  public void save()
  {
    String callbackData = "";
    try {
      if (this.product.getProductCate().getId().intValue() == 0) {
        callbackData = BjuiJson.json("300", "请选择栏目", "", "", "", "", "", "");
      } else if ("".equals(this.product.getContent())) {
        callbackData = BjuiJson.json("300", "请输入内容", "", "", "", "", "", "");
      } else {
        if (StringUtils.isEmpty(this.product.getPicture())) {
          this.product.setPicture("images/nopicture.jpg");
        }
        this.product.setDeleted(false);

        this.product.setCreateDate(new Date());
        boolean result = this.productService.saveOrUpdate(this.product);
        if (result)
          callbackData = BjuiJson.json("200", "添加成功", "", "", "", "true", "", "");
        else
          callbackData = BjuiJson.json("300", "添加失败", "", "", "", "", "", "");
      }
    }
    catch (Exception e) {
      e.printStackTrace();
    }
    PrintWriter out = null;
    try {
      out = this.response.getWriter();
    } catch (IOException e) {
      e.printStackTrace();
    }
    out.print(callbackData);
    out.flush();
    out.close();
  }

  public void info()
  {
    String callbackData = "";
    String idStr = this.request.getParameter("id");
    try {
      PrintWriter out = this.response.getWriter();

      if ((idStr == null) || ("".equals(idStr))) {
        callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", "", "");
        out.print(callbackData);
        out.flush();
        out.close();
      } else {
        int id = 0;
        try {
          id = Integer.parseInt(idStr);
        }
        catch (Exception e) {
          callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", "", "");
          out.print(callbackData);
          out.flush();
          out.close();
        }
        Product findProduct = (Product)this.productService.findById(Product.class, id);
        if (findProduct == null)
        {
          callbackData = BjuiJson.json("300", "产品不存在", "", "", "", "", "", "");
          out.print(callbackData);
          out.flush();
          out.close();
        }
        else {
          List<ProductCate> productCatelist = this.productCateService.list("from ProductCate where deleted=0");
          String zNodes = "";
          for (ProductCate productCate : productCatelist) {
            zNodes = zNodes + "<li data-id='" + productCate.getId() + "' data-pid='" + productCate.getFatherId() + "' data-tabid='" + productCate.getId() + "'>" + productCate.getName() + "</li>";
          }
          this.cfg = new Configuration();

          this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
            "WEB-INF/templates/admin");
          Map root = new HashMap();
          root.put("product", findProduct);
          root.put("zNodes", zNodes);
          FreemarkerUtils.freemarker(this.request, this.response, "productEdit.ftl", this.cfg, root);
        }
      }
    } catch (IOException e) {
      e.printStackTrace();
    } catch (JSONException e) {
      e.printStackTrace();
    }
  }

  public void update() {
    String callbackData = "";
    try {
      PrintWriter out = this.response.getWriter();
      if (this.product == null) {
        callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", "", "");
      } else {
        Product findProduct = (Product)this.productService.findById(Product.class, this.product.getId().intValue());
        findProduct.setProductCate(this.product.getProductCate());
        findProduct.setPicture(this.product.getPicture());
        findProduct.setTitle(this.product.getTitle());
        findProduct.setContent(this.product.getContent());
        boolean result = this.productService.saveOrUpdate(findProduct);

        if (result) {
          callbackData = BjuiJson.json("200", "修改成功", "", "", "", "true", "", "");
        }
        else {
          callbackData = BjuiJson.json("300", "修改失败", "", "", "", "", "", "");
        }
      }
      out.print(callbackData);
      out.flush();
      out.close();
    } catch (JSONException e) {
      e.printStackTrace();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  public void delete() {
    String callbackData = "";
    String idStr = this.request.getParameter("id");
    try {
      PrintWriter out = this.response.getWriter();

      if ((idStr == null) || ("".equals(idStr))) {
        callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", "", "");
      } else {
        int id = 0;
        try {
          id = Integer.parseInt(idStr);
        }
        catch (Exception e) {
          callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", "", "");
        }
        Product findProduct = (Product)this.productService.findById(Product.class, id);
        if (findProduct == null)
        {
          callbackData = BjuiJson.json("300", "产品不存在", "", "", "", "", "", "");
        }
        else try {
            boolean result = this.productService.delete(findProduct);
            if (result)
              callbackData = BjuiJson.json("200", "删除成功", "", "", "", "", "", "");
            else
              callbackData = BjuiJson.json("300", "删除失败", "", "", "", "", "", "");
          }
          catch (JSONException e) {
            e.printStackTrace();
          }
      }

      out.print(callbackData);
      out.flush();
      out.close();
    } catch (JSONException e) {
      e.printStackTrace();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  public void indexProductList() {
    String idStr = this.request.getParameter("id");
    String key = this.request.getParameter("key");
    String pStr = this.request.getParameter("p");
    int p = 1;
    if (!StringUtils.isEmpty(pStr)) {
      p = Integer.parseInt(pStr);
    }

    int count = 0;
    String countHql = "select count(*) from Product where deleted=0";
    String hql = "select new Product(id,picture,title,bills,money) from Product where deleted=0";
    if (!StringUtils.isEmpty(idStr)) {
      countHql = countHql + " and productCate.id=" + idStr;
      hql = hql + " and productCate.id=" + idStr;
    }
    if (!StringUtils.isEmpty(key)) {
      try {
        key = new String(key.getBytes("ISO-8859-1"), "utf-8");
      } catch (UnsupportedEncodingException e) {
        e.printStackTrace();
      }
      countHql = countHql + " and title like '%" + key + "%'";
      hql = hql + " and title like '%" + key + "%'";
    }
    hql = hql + " order by id desc";
    count = this.productService.getTotalCount(countHql, new Object[0]);
    PageModel pageModel = new PageModel();
    pageModel.setAllCount(count);
    pageModel.setCurrentPage(p);
    List list = this.productService.list(hql, pageModel.getStart(), pageModel.getPageSize(), new Object[0]);
    JSONObject json = new JSONObject();
    if (list.size() == 0)
    {
      json.put("status", "0");

      json.put("isNextPage", "0");
    }
    else {
      json.put("status", "1");
      if (list.size() == pageModel.getPageSize())
      {
        json.put("isNextPage", "1");
      }
      else {
        json.put("isNextPage", "0");
      }
      JSONArray listJson = (JSONArray)JSONArray.toJSON(list);
      json.put("list", listJson);
    }
    PrintWriter out = null;
    try {
      out = this.response.getWriter();
    } catch (IOException e1) {
      e1.printStackTrace();
    }
    out.print(json);
    out.flush();
    out.close();
  }

  public void indexProduct() {
    String idStr = this.request.getParameter("id");
    JSONObject json = new JSONObject();
    PrintWriter out = null;
    try {
      out = this.response.getWriter();
    } catch (IOException e1) {
      e1.printStackTrace();
    }

    if ((idStr == null) || ("".equals(idStr))) {
      json.put("status", "0");
      json.put("message", "参数错误");
    } else {
      int id = 0;
      try {
        id = Integer.parseInt(idStr);
      }
      catch (Exception e) {
        json.put("status", "0");
        json.put("message", "参数错误");
      }
      Product findproduct = (Product)this.productService.findById(Product.class, id);
      if (findproduct == null)
      {
        json.put("status", "0");
        json.put("message", "产品不存在");
      } else {
        JSONObject jsonObj = (JSONObject)JSONObject.toJSON(findproduct);
        json.put("status", "1");
        json.put("product", jsonObj);
      }
    }
    out.print(json);
    out.flush();
    out.close();
  }

  public void productDetail() {
    String idStr = this.request.getParameter("id");
    PrintWriter out = null;
    String callback = "";
    try {
      out = this.response.getWriter();
    } catch (IOException e1) {
      e1.printStackTrace();
    }

    if ((idStr == null) || ("".equals(idStr))) {
    	callback = "参数错误";
      out.print(callback);
      out.flush();
      out.close();
    } else {
      int id = 0;
      try {
        id = Integer.parseInt(idStr);
      }
      catch (Exception e) {
    	  callback = "参数错误";
        out.print(callback);
        out.flush();
        out.close();
      }
      Product findproduct = (Product)this.productService.findById(Product.class, id);
      if (findproduct == null)
      {
    	callback = "产品不存在";
        out.print(callback);
        out.flush();
        out.close();
      } else {
        this.request.setAttribute("product", findproduct);
        try {
          this.request.getRequestDispatcher("detail.jsp").forward(this.request, this.response);
        } catch (ServletException e) {
          e.printStackTrace();
        } catch (IOException e) {
          e.printStackTrace();
        }
      }
    }
  }

  public Product getProduct()
  {
    return this.product;
  }

  public void setProduct(Product product) {
    this.product = product;
  }
}