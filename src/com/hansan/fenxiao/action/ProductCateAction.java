package com.hansan.fenxiao.action;

import com.hansan.fenxiao.entities.ProductCate;
import com.hansan.fenxiao.service.IProductCateService;
import com.hansan.fenxiao.utils.BjuiJson;
import com.hansan.fenxiao.utils.FreemarkerUtils;
import freemarker.template.Configuration;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.logging.Log;
import org.json.JSONException;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

@Controller("productCateAction")
@Scope("prototype")
public class ProductCateAction extends BaseAction
{
  private static final long serialVersionUID = 1L;

  @Resource(name="productCateService")
  private IProductCateService<ProductCate> productCateService;
  private ProductCate productCate;

  public void list()
  {
    List<ProductCate> list = this.productCateService.list("from ProductCate where deleted=0");
    String zNodes = "";
    for (ProductCate ProductCate : list) {
      zNodes = zNodes + "<li data-id='" + ProductCate.getId() + "' data-pid='" + ProductCate.getFatherId() + "' data-tabid='" + ProductCate.getId() + "'>" + ProductCate.getName() + "[ID:" + ProductCate.getId() + "]</li>";
    }
    this.cfg = new Configuration();

    this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
      "WEB-INF/templates/admin");
    Map root = new HashMap();
    root.put("zNodes", zNodes);
    root.put("list", list);
    FreemarkerUtils.freemarker(this.request, this.response, "productCateList.ftl", this.cfg, root);
  }

  public void add() {
    List<ProductCate> list = this.productCateService.list("from ProductCate where deleted=0");
    String zNodes = "<li data-id='0' data-pid='0' data-tabid='0'>顶级分类</li>";
    for (ProductCate ProductCate : list) {
      zNodes = zNodes + "<li data-id='" + ProductCate.getId() + "' data-pid='" + ProductCate.getFatherId() + "' data-tabid='" + ProductCate.getId() + "'>" + ProductCate.getName() + "</li>";
    }
    this.cfg = new Configuration();

    this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
      "WEB-INF/templates/admin");
    Map root = new HashMap();
    root.put("zNodes", zNodes);
    root.put("list", list);
    FreemarkerUtils.freemarker(this.request, this.response, "productCateAdd.ftl", this.cfg, root);
  }

  public void save()
  {
    String callbackData = "";
    this.productCate.setDeleted(false);
    this.productCate.setCreateDate(new Date());
    boolean result = this.productCateService.saveOrUpdate(this.productCate);
    try {
      if (result)
        callbackData = BjuiJson.json("200", "添加成功", "", "", "", "true", "", "");
      else
        callbackData = BjuiJson.json("300", "添加失败", "", "", "", "", "", "");
    }
    catch (JSONException e) {
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

  public void getNameById()
  {
    String idStr = this.request.getParameter("id");
    String callbackData = "";
    PrintWriter out = null;
    try {
      out = this.response.getWriter();
    } catch (IOException e) {
      e.printStackTrace();
    }

    if ((idStr == null) || ("".equals(idStr))) {
      callbackData = "参数错误";
    } else {
      int id = 0;
      try {
        id = Integer.parseInt(idStr);
      }
      catch (Exception e) {
        callbackData = "参数错误";
      }
      ProductCate findProductCate = (ProductCate)this.productCateService.findById(ProductCate.class, id);
      if (findProductCate == null)
      {
        callbackData = "分类不存在";
      }
      else callbackData = findProductCate.getName();
    }

    this.log.info(callbackData);
    out.print(callbackData);
    out.flush();
    out.close();
  }

  public void info()
  {
    String idStr = this.request.getParameter("id");
    String callbackData = "";
    PrintWriter out = null;
    try {
      out = this.response.getWriter();
    } catch (IOException e) {
      e.printStackTrace();
    }
    try
    {
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
        ProductCate findProductCate = (ProductCate)this.productCateService.findById(ProductCate.class, id);
        if (findProductCate == null)
        {
          callbackData = BjuiJson.json("300", "分类不存在", "", "", "", "", "", "");
          out.print(callbackData);
          out.flush();
          out.close();
        } else {
          List<ProductCate> list = this.productCateService.list("from ProductCate where deleted=0");
          String zNodes = "<li data-id='0' data-pid='0' data-tabid='0'>顶级分类</li>";
          for (ProductCate ProductCate : list) {
            zNodes = zNodes + "<li data-id='" + ProductCate.getId() + "' data-pid='" + ProductCate.getFatherId() + "' data-tabid='" + ProductCate.getId() + "'>" + ProductCate.getName() + "</li>";
          }

          String fatherName = "";
          if (findProductCate.getFatherId() != 0) {
            ProductCate fatherProductCate = (ProductCate)this.productCateService.findById(ProductCate.class, findProductCate.getFatherId());
            if (fatherProductCate != null)
              fatherName = ((ProductCate)this.productCateService.findById(ProductCate.class, findProductCate.getFatherId())).getName();
            else
              fatherName = "上级分类不存在";
          }
          else {
            fatherName = "顶级分类";
          }

          this.cfg = new Configuration();

          this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
            "WEB-INF/templates/admin");
          Object root = new HashMap();
          ((Map)root).put("productCate", findProductCate);
          ((Map)root).put("zNodes", zNodes);
          ((Map)root).put("fatherName", fatherName);
          FreemarkerUtils.freemarker(this.request, this.response, "productCateEdit.ftl", this.cfg, (Map)root);
        }
      }
    } catch (JSONException e) {
      e.printStackTrace();
    }
  }

  public void update()
  {
    PrintWriter out = null;
    try {
      out = this.response.getWriter();
    } catch (IOException e) {
      e.printStackTrace();
    }
    String callbackData = "";
    try {
      if (this.productCate == null) {
    	  callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", "", "");
      }
      else if (this.productCate.getFatherId() == this.productCate.getId().intValue()) {
    	  callbackData = BjuiJson.json("300", "上级分类不能选择当前修改的分类", "", "", "", "", "", "");
      } else {
        ProductCate findProductCate = (ProductCate)this.productCateService.findById(ProductCate.class, this.productCate.getId().intValue());
        findProductCate.setFatherId(this.productCate.getFatherId());
        findProductCate.setName(this.productCate.getName());
        boolean result = this.productCateService.saveOrUpdate(findProductCate);

        if (result) {
        	callbackData = BjuiJson.json("200", "修改成功", "", "", "", "true", "", "");
        }
        else
        	callbackData = BjuiJson.json("300", "修改失败", "", "", "", "", "", "");
      }
    }
    catch (JSONException e)
    {
      e.printStackTrace();
    }
    out.print(callbackData);
    out.flush();
    out.close();
  }

  public void delete()
  {
    String idStr = this.request.getParameter("id");
    String callbackData = "";
    PrintWriter out = null;
    try {
      out = this.response.getWriter();

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
        ProductCate findProductCate = (ProductCate)this.productCateService.findById(ProductCate.class, id);
        if (findProductCate == null)
        {
        	callbackData = BjuiJson.json("300", "分类不存在", "", "", "", "", "", "");
        }
        else {
          List sanList = this.productCateService.listByFatherId(id);
          this.log.info(sanList);
          if (sanList.size() != 0) {
        	  callbackData = BjuiJson.json("300", "该分类存在下级分类，请先删除下级分类", "", "", "", "", "", "");
          } else {
            boolean result = this.productCateService.delete(findProductCate);
            if (result)
            	callbackData = BjuiJson.json("200", "删除成功", "ProductCateList", "", "", "true", "", "");
            else
            	callbackData = BjuiJson.json("300", "删除失败", "", "", "", "", "", "");
          }
        }
      }
    }
    catch (IOException e) {
      e.printStackTrace();
    } catch (JSONException e) {
      e.printStackTrace();
    }
    out.print(callbackData);
    out.flush();
    out.close();
  }

  public ProductCate getProductCate() {
    return this.productCate;
  }

  public void setProductCate(ProductCate productCate) {
    this.productCate = productCate;
  }
}
