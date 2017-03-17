package com.hansan.fenxiao.action;

import com.hansan.fenxiao.entities.Admin;
import com.hansan.fenxiao.entities.Config;
import com.hansan.fenxiao.service.IConfigService;
import com.hansan.fenxiao.utils.BjuiJson;
import com.hansan.fenxiao.utils.FreemarkerUtils;
import freemarker.template.Configuration;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.json.JSONException;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

@Controller("configAction")
@Scope("prototype")
public class ConfigAction extends BaseAction
{
  private static final long serialVersionUID = 1L;

  @Resource(name="configService")
  private IConfigService<Config> configService;
  private Config config;

  public void info()
  {
    HttpSession session = this.request.getSession();
    Admin loginAdmin = (Admin)session.getAttribute("loginAdmin");
    String callbackData = "";
    PrintWriter out = null;
    try {
      out = this.response.getWriter();
    } catch (IOException e) {
      e.printStackTrace();
    }
    try {
      if (loginAdmin.getJuri() != 1) {
        callbackData = BjuiJson.json("300", "权限不足", "", "", "", "", "", "");
      } else {
        Config findConfig = (Config)this.configService.findById(Config.class, 1);
        if (findConfig == null)
        {
          callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", "", "");
        } else {
          this.cfg = new Configuration();

          this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), "WEB-INF/templates/admin");
          Map root = new HashMap();
          findConfig.setFirstLevel(Double.valueOf(findConfig.getFirstLevel().doubleValue() * 100.0D));
          findConfig.setSecondLevel(Double.valueOf(findConfig.getSecondLevel().doubleValue() * 100.0D));
          findConfig.setThirdLevel(Double.valueOf(findConfig.getThirdLevel().doubleValue() * 100.0D));
          root.put("config", findConfig);
          FreemarkerUtils.freemarker(this.request, this.response, "configEdit.ftl", this.cfg, root);
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
      if (loginAdmin.getJuri() != 1) {
        callbackData = BjuiJson.json("300", "权限不足", "", "", "", "", "", "");
      }
      else if (this.config == null) {
        callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", "", "");
      } else {
        Config findConfig = (Config)this.configService.findById(Config.class, this.config.getId().intValue());
        findConfig.setLogo(this.config.getLogo());
        findConfig.setSiteName(this.config.getSiteName());
        findConfig.setSiteKeys(this.config.getSiteKeys());
        findConfig.setSiteDescription(this.config.getSiteDescription());
        findConfig.setSiteUrl(this.config.getSiteUrl());
        findConfig.setAddress(this.config.getAddress());
        findConfig.setEmail(this.config.getEmail());
        findConfig.setPhone(this.config.getPhone());
        findConfig.setQq(this.config.getQq());
        findConfig.setWeibo(this.config.getWeibo());
        findConfig.setWeixin(this.config.getWeixin());
        findConfig.setSendEmail(this.config.getSendEmail());
        findConfig.setSendEmailPass(this.config.getSendEmailPass());
        findConfig.setSendEmailSmtp(this.config.getSendEmailSmtp());
        findConfig.setFirstLevel(Double.valueOf(this.config.getFirstLevel().doubleValue() / 100.0D));
        findConfig.setSecondLevel(Double.valueOf(this.config.getSecondLevel().doubleValue() / 100.0D));
        findConfig.setThirdLevel(Double.valueOf(this.config.getThirdLevel().doubleValue() / 100.0D));
        findConfig.setDownloadUrl(this.config.getDownloadUrl());
        findConfig.setAlipayPartner(this.config.getAlipayPartner());
        findConfig.setAlipaySellerEmail(this.config.getAlipaySellerEmail());
        findConfig.setAlipayKey(this.config.getAlipayKey());
        findConfig.setOnlinePayIsOpen(this.config.getOnlinePayIsOpen());
        findConfig.setRechargeCardIsOpen(this.config.getRechargeCardIsOpen());
        boolean result = this.configService.saveOrUpdate(findConfig);

        if (result) {
          this.request.getServletContext().setAttribute("config", findConfig);
          callbackData = BjuiJson.json("200", "修改成功", "", "", "", "", "", "");
        }
        else {
          callbackData = BjuiJson.json("300", "修改失败", "", "", "", "", "", "");
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

  public void contact() {
    Config findConfig = (Config)this.configService.findById(Config.class, 1);
    this.cfg = new Configuration();

    this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), "WEB-INF/templates/index");
    Map root = new HashMap();
    root.put("config", findConfig);
    FreemarkerUtils.freemarker(this.request, this.response, this.ftlFileName, this.cfg, root);
  }

  public Config getConfig()
  {
    return this.config;
  }

  public void setConfig(Config config) {
    this.config = config;
  }
}