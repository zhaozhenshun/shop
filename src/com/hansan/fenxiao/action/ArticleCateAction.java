package com.hansan.fenxiao.action;

import com.hansan.fenxiao.entities.ArticleCate;
import com.hansan.fenxiao.service.IArticleCateService;
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

@Controller("articleCateAction")
@Scope("prototype")
public class ArticleCateAction extends BaseAction
{
  private static final long serialVersionUID = 1L;

  @Resource(name="articleCateService")
  private IArticleCateService<ArticleCate> articleCateService;
  private ArticleCate articleCate;

  public void list()
  {
    List<ArticleCate> list = this.articleCateService.list("from ArticleCate where deleted=0");
    String zNodes = "";
    for (ArticleCate articleCate : list) {
      zNodes = zNodes + "<li data-id='" + articleCate.getId() + "' data-pid='" + articleCate.getFatherId() + "' data-tabid='" + articleCate.getId() + "'>" + articleCate.getName() + "[ID:" + articleCate.getId() + "]</li>";
    }
    this.cfg = new Configuration();

    this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
      "WEB-INF/templates/admin");
    Map root = new HashMap();
    root.put("zNodes", zNodes);
    root.put("list", list);
    FreemarkerUtils.freemarker(this.request, this.response, "articleCateList.ftl", this.cfg, root);
  }

  public void add() {
    List<ArticleCate> list = this.articleCateService.list("from ArticleCate where deleted=0");
    String zNodes = "<li data-id='0' data-pid='0' data-tabid='0'>顶级栏目</li>";
    for (ArticleCate articleCate : list) {
      zNodes = zNodes + "<li data-id='" + articleCate.getId() + "' data-pid='" + articleCate.getFatherId() + "' data-tabid='" + articleCate.getId() + "'>" + articleCate.getName() + "</li>";
    }
    this.cfg = new Configuration();

    this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
      "WEB-INF/templates/admin");
    Map root = new HashMap();
    root.put("zNodes", zNodes);
    root.put("list", list);
    FreemarkerUtils.freemarker(this.request, this.response, "articleCateAdd.ftl", this.cfg, root);
  }

  public void save()
  {
    String callbackData = "";
    this.articleCate.setDeleted(false);
    this.articleCate.setCreateDate(new Date());
    boolean result = this.articleCateService.saveOrUpdate(this.articleCate);
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
      ArticleCate findArticleCate = (ArticleCate)this.articleCateService.findById(ArticleCate.class, id);
      if (findArticleCate == null)
      {
        callbackData = "栏目不存在";
      }
      else callbackData = findArticleCate.getName();
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
        ArticleCate findArticleCate = (ArticleCate)this.articleCateService.findById(ArticleCate.class, id);
        if (findArticleCate == null)
        {
          callbackData = BjuiJson.json("300", "栏目不存在", "", "", "", "", "", "");
          out.print(callbackData);
          out.flush();
          out.close();
        } else {
          List<ArticleCate> list = this.articleCateService.list("from ArticleCate where deleted=0");
          String zNodes = "<li data-id='0' data-pid='0' data-tabid='0'>顶级栏目</li>";
          for (ArticleCate articleCate : list) {
            zNodes = zNodes + "<li data-id='" + articleCate.getId() + "' data-pid='" + articleCate.getFatherId() + "' data-tabid='" + articleCate.getId() + "'>" + articleCate.getName() + "</li>";
          }

          String fatherName = "";
          if (findArticleCate.getFatherId() != 0) {
            ArticleCate fatherArticleCate = (ArticleCate)this.articleCateService.findById(ArticleCate.class, findArticleCate.getFatherId());
            if (fatherArticleCate != null)
              fatherName = ((ArticleCate)this.articleCateService.findById(ArticleCate.class, findArticleCate.getFatherId())).getName();
            else
              fatherName = "上级栏目不存在";
          }
          else {
            fatherName = "顶级栏目";
          }

          this.cfg = new Configuration();

          this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
            "WEB-INF/templates/admin");
          Object root = new HashMap();
          ((Map)root).put("articleCate", findArticleCate);
          ((Map)root).put("zNodes", zNodes);
          ((Map)root).put("fatherName", fatherName);
          FreemarkerUtils.freemarker(this.request, this.response, "articleCateEdit.ftl", this.cfg, (Map)root);
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
      if (this.articleCate == null) {
        callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", "", "");
      }
      else if (this.articleCate.getFatherId() == this.articleCate.getId().intValue()) {
        callbackData = BjuiJson.json("300", "上级栏目不能选择当前修改的栏目", "", "", "", "", "", "");
      } else {
        ArticleCate findArticleCate = (ArticleCate)this.articleCateService.findById(ArticleCate.class, this.articleCate.getId().intValue());
        findArticleCate.setFatherId(this.articleCate.getFatherId());
        findArticleCate.setName(this.articleCate.getName());
        boolean result = this.articleCateService.saveOrUpdate(findArticleCate);

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
        ArticleCate findArticleCate = (ArticleCate)this.articleCateService.findById(ArticleCate.class, id);
        if (findArticleCate == null)
        {
          callbackData = BjuiJson.json("300", "栏目不存在", "", "", "", "", "", "");
        }
        else {
          List sanList = this.articleCateService.listByFatherId(id);
          this.log.info(sanList);
          if (sanList.size() != 0) {
            callbackData = BjuiJson.json("300", "该栏目存在下级栏目，请先删除下级栏目", "", "", "", "", "", "");
          } else {
            boolean result = this.articleCateService.delete(findArticleCate);
            if (result)
              callbackData = BjuiJson.json("200", "删除成功", "articleCateList", "", "", "true", "", "");
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

  public ArticleCate getArticleCate() {
    return this.articleCate;
  }

  public void setArticleCate(ArticleCate articleCate) {
    this.articleCate = articleCate;
  }
}

/* Location:           D:\360安全浏览器下载\WeFenxiao_A5\WeFenxiao_V1.0.1\WEB-INF\classes\
 * Qualified Name:     com.hansan.fenxiao.action.ArticleCateAction
 * JD-Core Version:    0.6.0
 */