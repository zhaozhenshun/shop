package com.hansan.fenxiao.action;

import com.hansan.fenxiao.entities.Article;
import com.hansan.fenxiao.entities.ArticleCate;
import com.hansan.fenxiao.entities.Config;
import com.hansan.fenxiao.service.IArticleCateService;
import com.hansan.fenxiao.service.IArticleService;
import com.hansan.fenxiao.service.IConfigService;
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
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONException;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

@Controller("articleAction")
@Scope("prototype")
public class ArticleAction extends BaseAction
{
  private static final long serialVersionUID = 1L;

  @Resource(name="articleService")
  private IArticleService<Article> articleService;

  @Resource(name="articleCateService")
  private IArticleCateService<ArticleCate> articleCateService;

  @Resource(name="configService")
  private IConfigService<Config> configService;
  private Article article;

  public void list()
  {
    String key = this.request.getParameter("key");

    int count = 0;
    if (("".equals(key)) || (key == null)) {
      count = this.articleService.getTotalCount("select count(*) from Article where deleted=0", new Object[0]);
      key = "";
    } else {
      count = this.articleService.getTotalCount("from Article where title like '%" + key + "%' and deleted=0", new Object[0]);
    }

    this.page = new BjuiPage(this.pageCurrent, this.pageSize);
    this.page.setTotalCount(count);

    List list = this.articleService.list("from Article where deleted=0 order by id desc", this.page.getStart(), this.page.getPageSize(), new Object[0]);
    this.cfg = new Configuration();

    this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
      "WEB-INF/templates/admin");
    Map root = new HashMap();
    root.put("list", list);
    root.put("page", this.page);
    FreemarkerUtils.freemarker(this.request, this.response, "articleList.ftl", this.cfg, root);
  }

  public void add() {
    List<ArticleCate> articleCatelist = this.articleCateService.list("from ArticleCate where deleted=0");
    String zNodes = "";
    for (ArticleCate articleCate : articleCatelist) {
      zNodes = zNodes + "<li data-id='" + articleCate.getId() + "' data-pid='" + articleCate.getFatherId() + "' data-tabid='" + articleCate.getId() + "'>" + articleCate.getName() + "</li>";
    }
    this.cfg = new Configuration();

    this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
      "WEB-INF/templates/admin");
    Map root = new HashMap();
    root.put("zNodes", zNodes);
    FreemarkerUtils.freemarker(this.request, this.response, "articleAdd.ftl", this.cfg, root);
  }

  public void save()
  {
    String callbackData = "";
    try {
      if (this.article.getArticleCate().getId().intValue() == 0) {
        callbackData = BjuiJson.json("300", "请选择栏目", "", "", "", "", "", "");
      } else if ("".equals(this.article.getContent())) {
        callbackData = BjuiJson.json("300", "请输入内容", "", "", "", "", "", "");
      } else {
        this.article.setDeleted(false);

        this.article.setCreateDate(new Date());
        boolean result = this.articleService.saveOrUpdate(this.article);
        if (result)
          callbackData = BjuiJson.json("200", "添加成功", "", "", "", "true", "", "");
        else
          callbackData = BjuiJson.json("300", "添加失败", "", "", "", "", "", "");
      }
    }
    catch (JSONException e) {
      e.printStackTrace();
    } catch (Exception e) {
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
        Article findArticle = (Article)this.articleService.findById(Article.class, id);
        if (findArticle == null)
        {
          callbackData = BjuiJson.json("300", "文章不存在", "", "", "", "", "", "");
          out.print(callbackData);
          out.flush();
          out.close();
        }
        else {
          List<ArticleCate> articleCatelist = this.articleCateService.list("from ArticleCate where deleted=0");
          String zNodes = "";
          for (ArticleCate articleCate : articleCatelist) {
            zNodes = zNodes + "<li data-id='" + articleCate.getId() + "' data-pid='" + articleCate.getFatherId() + "' data-tabid='" + articleCate.getId() + "'>" + articleCate.getName() + "</li>";
          }
          this.cfg = new Configuration();

          this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
            "WEB-INF/templates/admin");
          Map root = new HashMap();
          root.put("article", findArticle);
          root.put("zNodes", zNodes);
          FreemarkerUtils.freemarker(this.request, this.response, "articleEdit.ftl", this.cfg, root);
        }
      }
    } catch (JSONException e) {
      e.printStackTrace();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  public void update() {
    String callbackData = "";
    try {
      PrintWriter out = this.response.getWriter();
      if (this.article == null) {
        callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", "", "");
      } else {
        Article findArticle = (Article)this.articleService.findById(Article.class, this.article.getId().intValue());
        this.article.setCreateDate(findArticle.getCreateDate());
        this.article.setVersion(findArticle.getVersion());
        this.article.setDeleted(findArticle.isDeleted());
        boolean result = this.articleService.saveOrUpdate(this.article);

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
        Article findArticle = (Article)this.articleService.findById(Article.class, id);
        if (findArticle == null)
        {
          callbackData = BjuiJson.json("300", "文章不存在", "", "", "", "", "", "");
        }
        else try {
            boolean result = this.articleService.delete(findArticle);
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

  public void indexArticleList() {
    String idStr = this.request.getParameter("id");
    String key = this.request.getParameter("key");
    String pStr = this.request.getParameter("p");
    Config config = (Config)this.configService.findById(Config.class, 1);
    int p = 1;
    if ((pStr != null) && (!"".equals(pStr))) {
      p = Integer.parseInt(pStr);
    }

    int count = 0;
    String countHql = "select count(*) from Article where deleted=0 and status=1";
    if ((idStr != null) && (!"".equals(idStr))) {
      countHql = countHql + " and articleCate.id=" + idStr;
    }
    if ((key != null) && (!"".equals(key))) {
      try {
        key = new String(key.getBytes("ISO-8859-1"), "utf-8");
      } catch (UnsupportedEncodingException e) {
        e.printStackTrace();
      }
      countHql = countHql + " and title like '%" + key + "%'";
    }
    count = this.articleService.getTotalCount(countHql, new Object[0]);
    PageModel pageModel = new PageModel();
    pageModel.setAllCount(count);
    pageModel.setCurrentPage(p);
    List list = null;
    ArticleCate articleCate = null;
    String hql = "from Article where deleted=0 and status=1";
    if ((idStr != null) && (!"".equals(idStr))) {
      hql = hql + " and articleCate.id=" + idStr;
      articleCate = (ArticleCate)this.articleCateService.findById(ArticleCate.class, Integer.parseInt(idStr));
    }
    if ((key != null) && (!"".equals(key))) {
      hql = hql + " and title like '%" + key + "%'";
    }
    hql = hql + " order by id desc";
    list = this.articleService.list(hql, pageModel.getStart(), pageModel.getPageSize(), new Object[0]);
    this.cfg = new Configuration();

    this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
      "WEB-INF/templates/index");
    Map root = new HashMap();

    root.put("articleList", list);
    root.put("articleCate", articleCate);
    root.put("page", pageModel.getPageStr("list.do?id=" + idStr + "&p="));
    root.put("config", config);
    FreemarkerUtils.freemarker(this.request, this.response, this.ftlFileName, this.cfg, root);
  }
  public void indexArticle() {
    String callbackData = "";
    String idStr = this.request.getParameter("id");
    PrintWriter out = null;
    try {
      out = this.response.getWriter();
    } catch (IOException e1) {
      e1.printStackTrace();
    }

    if ((idStr == null) || ("".equals(idStr))) {
      callbackData = "参数错误";
      out.print(callbackData);
      out.flush();
      out.close();
    } else {
      int id = 0;
      try {
        id = Integer.parseInt(idStr);
      }
      catch (Exception e) {
        callbackData = "参数错误";
        out.print(callbackData);
        out.flush();
        out.close();
      }
      Article findArticle = (Article)this.articleService.findById(Article.class, id);
      if (findArticle == null)
      {
        callbackData = "文章不存在";
        out.print(callbackData);
        out.flush();
        out.close();
      } else {
        Config config = (Config)this.configService.findById(Config.class, 1);
        this.cfg = new Configuration();

        this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), 
          "WEB-INF/templates/index");
        Map root = new HashMap();
        root.put("article", findArticle);
        root.put("config", config);
        FreemarkerUtils.freemarker(this.request, this.response, this.ftlFileName, this.cfg, root);
      }
    }
  }

  public Article getArticle() {
    return this.article;
  }

  public void setArticle(Article article) {
    this.article = article;
  }
}

/* Location:           D:\360安全浏览器下载\WeFenxiao_A5\WeFenxiao_V1.0.1\WEB-INF\classes\
 * Qualified Name:     com.hansan.fenxiao.action.ArticleAction
 * JD-Core Version:    0.6.0
 */