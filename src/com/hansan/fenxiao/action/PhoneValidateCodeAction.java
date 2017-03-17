package com.hansan.fenxiao.action;

import com.alibaba.fastjson.JSONObject;
import com.hansan.fenxiao.entities.Config;
import com.hansan.fenxiao.entities.PhoneValidateCode;
import com.hansan.fenxiao.entities.User;
import com.hansan.fenxiao.service.IConfigService;
import com.hansan.fenxiao.service.IPhoneValidateCodeService;
import com.hansan.fenxiao.service.IUserService;
import com.hansan.fenxiao.utils.SendSms;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.Random;
import javax.annotation.Resource;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

@Controller("phoneValidateCodeAction")
@Scope("prototype")
public class PhoneValidateCodeAction extends BaseAction
{
  private static final long serialVersionUID = 1L;

  @Resource(name="phoneValidateCodeService")
  private IPhoneValidateCodeService<PhoneValidateCode> phoneValidateCodeService;

  @Resource(name="configService")
  private IConfigService<Config> configService;

  @Resource(name="userService")
  private IUserService<User> userService;
  private PhoneValidateCode phoneValidateCode;

  public void createCode()
  {
    String name = this.request.getParameter("name");
    String phone = this.request.getParameter("phone");
    User findUser = this.userService.getUserByNameAndPhone(name, phone);
    JSONObject json = new JSONObject();
    PrintWriter out = null;
    try {
      out = this.response.getWriter();
    } catch (IOException e) {
      e.printStackTrace();
    }
    if (findUser == null) {
      json.put("status", "0");
      json.put("message", "用户名或者手机号不存在或者不匹配");
      out.print(json.toString());
      out.flush();
      out.close();
    } else {
      Random random = new Random();
      int code = random.nextInt(99999) + 100000;
      PhoneValidateCode phoneValidateCode = new PhoneValidateCode();
      phoneValidateCode.setCreateDate(new Date());
      phoneValidateCode.setDeleted(false);
      phoneValidateCode.setCode(""+code);
      phoneValidateCode.setPhone(phone);
      phoneValidateCode.setStatus(Integer.valueOf(0));
      this.phoneValidateCodeService.saveOrUpdate(phoneValidateCode);
      Config findConfig = (Config)this.configService.findById(Config.class, 1);
      String smsContent = "您正在找回密码操作,您的短信验证码是:" + code + ",如果不是本人操作,则不用理会。【" + findConfig.getSiteName() + "】";
      try {
        SendSms.send(smsContent, phone);
      } catch (IOException e) {
        json.put("status", "0");
        json.put("message", "验证码发送失败，请重试");
        out.print(json.toString());
        out.flush();
        out.close();
      }
      json.put("status", "1");
      json.put("message","短信验证码发送成功");
      out.print(json.toString());
      out.flush();
      out.close();
    }
  }

  public void validationCode() {
    String code = this.request.getParameter("code");
    String phone = this.request.getParameter("phone");
    PhoneValidateCode findPhoneValidateCode = this.phoneValidateCodeService.getPhoneValidateCode(phone, code);
    String callback = "";
    PrintWriter out = null;
    try {
      out = this.response.getWriter();
    } catch (IOException e) {
      e.printStackTrace();
    }
    if (findPhoneValidateCode == null) {
    	callback = "<script>alert('验证码错误');window.location.href='javascript:history.go(-1)'</script>";
      out.print(callback);
      out.flush();
      out.close();
    } else {
      long nowTime = System.currentTimeMillis();
      Date codeDateTime = findPhoneValidateCode.getCreateDate();
      long codeTime = codeDateTime.getTime();
      if (nowTime > codeTime + 600000L) {
    	  callback = "<script>alert('验证码错误');window.location.href='javascript:history.go(-1)'</script>";
        out.print(callback);
        out.flush();
        out.close();
      } else {
        HttpSession session = this.request.getSession();
        session.setAttribute("code", code);
        this.request.setAttribute("phone", phone);
        try {
          this.request.getRequestDispatcher("findPasswordNext.jsp").forward(this.request, this.response);
        } catch (ServletException e) {
          e.printStackTrace();
        } catch (IOException e) {
          e.printStackTrace();
        }
      }
    }
  }

  public PhoneValidateCode getPhoneValidateCode() {
    return this.phoneValidateCode;
  }

  public void setPhoneValidateCode(PhoneValidateCode phoneValidateCode) {
    this.phoneValidateCode = phoneValidateCode;
  }
}
