package com.hansan.fenxiao.action;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.hansan.fenxiao.entities.Admin;
import com.hansan.fenxiao.entities.Config;
import com.hansan.fenxiao.entities.Financial;
import com.hansan.fenxiao.entities.User;
import com.hansan.fenxiao.service.IConfigService;
import com.hansan.fenxiao.service.IFinancialService;
import com.hansan.fenxiao.service.IUserService;
import com.hansan.fenxiao.utils.BjuiJson;
import com.hansan.fenxiao.utils.BjuiPage;
import com.hansan.fenxiao.utils.FreemarkerUtils;
import com.hansan.fenxiao.utils.PageModel;
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
import javax.servlet.http.HttpSession;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONException;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

@Controller("financialAction")
@Scope("prototype")
public class FinancialAction extends BaseAction
{
  private static final long serialVersionUID = 1L;

  @Resource(name="financialService")
  private IFinancialService<Financial> financialService;

  @Resource(name="configService")
  private IConfigService<Config> configService;

  @Resource(name="userService")
  private IUserService<User> userService;
  private Financial financial;
  private String ftlFileName;

  public void list()
  {
    String key = this.request.getParameter("key");
    String countHql = "select count(*) from Financial where deleted=0";
    String hql = "from Financial where deleted=0";
    if (StringUtils.isNotEmpty(key)) {
      countHql = countHql + " and (user.name='" + key + "' or no='" + key + "')";
      hql = hql + " and (user.name='" + key + "' or no='" + key + "')";
    }
    hql = hql + " order by id desc";

    int count = 0;
    count = this.financialService.getTotalCount(countHql, new Object[0]);
    this.page = new BjuiPage(this.pageCurrent, this.pageSize);
    this.page.setTotalCount(count);
    this.cfg = new Configuration();

    this.cfg.setServletContextForTemplateLoading(
      this.request.getServletContext(), "WEB-INF/templates/admin");
    List financialList = this.financialService.list(hql, this.page.getStart(), this.page.getPageSize(), new Object[0]);
    Map root = new HashMap();
    root.put("financialList", financialList);
    root.put("page", this.page);
    root.put("key", key);
    FreemarkerUtils.freemarker(this.request, this.response, this.ftlFileName, this.cfg, root);
  }

  public void add()
  {
    this.cfg = new Configuration();

    this.cfg.setServletContextForTemplateLoading(
      this.request.getServletContext(), "WEB-INF/templates/admin");
    Map root = new HashMap();
    FreemarkerUtils.freemarker(this.request, this.response, this.ftlFileName, this.cfg, root);
  }

  public void save()
  {
    HttpSession session = this.request.getSession();
    Admin loginAdmin = (Admin)session.getAttribute("loginAdmin");
    PrintWriter out = null;
    try {
      out = this.response.getWriter();
    } catch (IOException e) {
      e.printStackTrace();
    }
    String callbackData = "";
    try {
      if (this.financial == null) {
        callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", "", "");
      } else {
        User findUser = this.userService.getUserByName(this.financial.getUser().getName());
        if (findUser == null) {
          callbackData = BjuiJson.json("300", "用户名不存在", "", "", "", "", "", "");
        } else {
          this.financial.setMoney(Double.valueOf(-this.financial.getMoney().doubleValue()));

          this.financial.setOperator(loginAdmin.getName());

          this.financial.setUser(findUser);

          this.financial.setCreateDate(new Date());
          this.financial.setDeleted(false);
          findUser.setBalance(Double.valueOf(findUser.getBalance().doubleValue() + this.financial.getMoney().doubleValue()));

          this.financial.setBalance(findUser.getBalance());
          this.financial.setRemark("扣除游戏额度");
          boolean res = this.financialService.saveOrUpdate(this.financial);
          if (res) {
            callbackData = BjuiJson.json("200", "添加成功", "", "", "", "true", "", "");

            this.userService.saveOrUpdate(findUser);
          } else {
            callbackData = BjuiJson.json("300", "添加失败，请重试", "", "", "", "", "", "");
          }
        }
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
        callbackData = BjuiJson.json("300", "参数不能为空", "", "", "", 
          "", "", "");
      } else {
        int id = 0;
        try {
          id = Integer.parseInt(idStr);
        }
        catch (Exception e) {
          callbackData = BjuiJson.json("300", "参数错误", "", "", "", 
            "", "", "");
        }
        Financial findfinancial = (Financial)this.financialService.findById(Financial.class, id);
        if (findfinancial == null)
        {
          callbackData = BjuiJson.json("300", "用户不存在", "", "", 
            "", "", "", "");
        } else {
          this.cfg = new Configuration();

          this.cfg.setServletContextForTemplateLoading(
            this.request.getServletContext(), 
            "WEB-INF/templates/admin");
          Map root = new HashMap();
          root.put("financial", findfinancial);
          FreemarkerUtils.freemarker(this.request, this.response, this.ftlFileName, this.cfg, root);
        }
      }
    } catch (JSONException e) {
      e.printStackTrace();
    }
    out.print(callbackData);
    out.flush();
    out.close();
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
      if (this.financial == null) {
        callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", 
          "", "");
      } else {
        Financial findfinancial = (Financial)this.financialService.findById(Financial.class, this.financial.getId().intValue());
        this.financial.setCreateDate(findfinancial.getCreateDate());
        this.financial.setDeleted(findfinancial.isDeleted());
        this.financial.setVersion(findfinancial.getVersion());
        boolean result = this.financialService.saveOrUpdate(this.financial);

        if (result) {
          callbackData = BjuiJson.json("200", "修改成功", "", 
            "", "", "true", "", "");
        }
        else
          callbackData = BjuiJson.json("300", "修改失败", "", 
            "", "", "", "", "");
      }
    }
    catch (JSONException e) {
      e.printStackTrace();
    }
    out.print(callbackData);
    out.flush();
    out.close();
  }

  public void delete()
  {
    PrintWriter out = null;
    try {
      out = this.response.getWriter();
    } catch (IOException e) {
      e.printStackTrace();
    }
    String callbackData = "";
    try {
      String idStr = this.request.getParameter("id");

      if ((idStr == null) || ("".equals(idStr))) {
        callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", 
          "", "");
      } else {
        int id = 0;
        try {
          id = Integer.parseInt(idStr);
        }
        catch (Exception e) {
          callbackData = BjuiJson.json("300", "参数错误", "", "", "", 
            "", "", "");
        }
        Financial findfinancial = (Financial)this.financialService.findById(Financial.class, id);
        if (findfinancial == null)
        {
          callbackData = BjuiJson.json("300", "用户不存在", "", "", 
            "", "true", "", "");
        } else {
          boolean result = this.financialService.delete(findfinancial);
          if (result)
            callbackData = BjuiJson.json("200", "删除成功", "", 
              "", "", "", "", "");
          else
            callbackData = BjuiJson.json("300", "删除失败", "", 
              "", "", "", "", "");
        }
      }
    }
    catch (JSONException e) {
      e.printStackTrace();
    }
    out.print(callbackData);
    out.flush();
    out.close();
  }

  public void userFinancialList()
  {
    String pStr = this.request.getParameter("p");
    int p = 1;
    if (!StringUtils.isEmpty(pStr)) {
      p = Integer.parseInt(pStr);
    }

    HttpSession session = this.request.getSession();
    User loginUser = (User)session.getAttribute("loginUser");
    String countHql = "select count(*) from Financial where deleted=0 and user.id=" + loginUser.getId();
    String hql = "from Financial where deleted=0 and user.id=" + loginUser.getId();
    hql = hql + " order by id desc";

    int count = 0;
    count = this.financialService.getTotalCount(countHql, new Object[0]);
    PageModel pageModel = new PageModel();
    pageModel.setAllCount(count);
    pageModel.setCurrentPage(p);
    List ordersList = this.financialService.list(hql, pageModel.getStart(), pageModel.getPageSize(), new Object[0]);
    JSONObject json = new JSONObject();
    if (ordersList.size() == 0)
    {
      json.put("status", "0");

      json.put("isNextPage", "0");
    }
    else {
      json.put("status", "1");
      if (ordersList.size() == pageModel.getPageSize())
      {
        json.put("isNextPage", "1");
      }
      else {
        json.put("isNextPage", "0");
      }
      JSONArray listJson = (JSONArray)JSONArray.toJSON(ordersList);
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

  public Financial getFinancial() {
    return this.financial;
  }

  public void setFinancial(Financial financial) {
    this.financial = financial;
  }

  public String getFtlFileName() {
    return this.ftlFileName;
  }

  public void setFtlFileName(String ftlFileName) {
    this.ftlFileName = ftlFileName;
  }
}