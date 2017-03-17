 package com.hansan.fenxiao.action;
 
 import com.alibaba.fastjson.JSONObject;
 import com.hansan.fenxiao.entities.Admin;
 import com.hansan.fenxiao.entities.Financial;
 import com.hansan.fenxiao.entities.RechargeCard;
 import com.hansan.fenxiao.entities.User;
 import com.hansan.fenxiao.service.IAdminService;
 import com.hansan.fenxiao.service.IFinancialService;
 import com.hansan.fenxiao.service.IRechargeCardService;
 import com.hansan.fenxiao.service.IUserService;
 import com.hansan.fenxiao.utils.BjuiJson;
 import com.hansan.fenxiao.utils.BjuiPage;
 import com.hansan.fenxiao.utils.FreemarkerUtils;
 import com.hansan.fenxiao.utils.Uuid;
 import freemarker.template.Configuration;
 import java.io.IOException;
 import java.io.PrintWriter;
 import java.text.SimpleDateFormat;
 import java.util.Date;
 import java.util.HashMap;
 import java.util.List;
 import java.util.Map;
 import javax.annotation.Resource;
 import javax.servlet.http.HttpServletRequest;
 import javax.servlet.http.HttpServletResponse;
 import javax.servlet.http.HttpSession;
 import org.apache.commons.lang.StringUtils;
 import org.json.JSONException;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Controller;
 
 @Controller("rechargeCardAction")
 @Scope("prototype")
 public class RechargeCardAction extends BaseAction
 {
   private static final long serialVersionUID = 1L;
 
   @Resource(name="rechargeCardService")
   private IRechargeCardService<RechargeCard> rechargeCardService;
   private RechargeCard rechargeCard;
 
   @Resource(name="adminService")
   private IAdminService<Admin> adminService;
 
   @Resource(name="userService")
   private IUserService<User> userService;
 
   @Resource(name="financialService")
   private IFinancialService<Financial> financialService;
 
   public void list()
   {
     String no = this.request.getParameter("no");
     String status = this.request.getParameter("status");
 
     int count = 0;
     String countHql = "select count(*) from RechargeCard where deleted=0";
     if (StringUtils.isNotEmpty(no)) {
       countHql = countHql + " and no like '%" + no + "%'";
     }
     if (StringUtils.isNotEmpty(status)) {
       countHql = countHql + " and status=" + status;
     }
     count = this.rechargeCardService.getTotalCount(countHql, new Object[0]);
 
     this.page = new BjuiPage(this.pageCurrent, this.pageSize);
     this.page.setTotalCount(count);
     this.cfg = new Configuration();
 
     this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), "WEB-INF/templates/admin");
     String hql = "from RechargeCard where deleted=0";
     if (StringUtils.isNotEmpty(no)) {
       hql = hql + " and no like '%" + no + "%'";
     }
     if (StringUtils.isNotEmpty(status)) {
       hql = hql + " and status=" + status;
     }
     hql = hql + " order by id desc";
     List rechargeCardList = this.rechargeCardService.list(hql, this.page.getStart(), this.page.getPageSize(), new Object[0]);
     Map root = new HashMap();
     root.put("rechargeCardList", rechargeCardList);
     root.put("page", this.page);
     root.put("no", no);
     FreemarkerUtils.freemarker(this.request, this.response, "rechargeCardList.ftl", this.cfg, root);
   }
 
   public void add()
   {
     this.cfg = new Configuration();
 
     this.cfg.setServletContextForTemplateLoading(this.request.getServletContext(), "WEB-INF/templates/admin");
     Map root = new HashMap();
     FreemarkerUtils.freemarker(this.request, this.response, "rechargeCardAdd.ftl", this.cfg, root);
   }
 
   public void save()
   {
     PrintWriter out = null;
     try {
       out = this.response.getWriter();
     } catch (IOException e) {
       e.printStackTrace();
     }
     String numStr = this.request.getParameter("num");
     String moneyStr = this.request.getParameter("money");
     int num = Integer.parseInt(numStr);
     double money = Double.parseDouble(moneyStr);
     String callbackData = "";
     try {
       Date date = new Date();
       for (int i = 0; i < num; i++) {
         String no = Uuid.getUUID();
         RechargeCard rechargeCard = new RechargeCard();
         rechargeCard.setDeleted(false);
         rechargeCard.setCreateDate(date);
         rechargeCard.setMoney(money);
         rechargeCard.setStatus(Integer.valueOf(0));
         rechargeCard.setNo(no);
         this.rechargeCardService.saveOrUpdate(rechargeCard);
       }
       callbackData = BjuiJson.json("200", "成功生成" + num + "张充值卡", "", "", "", "true", "", "");
     } catch (JSONException e) {
       e.printStackTrace();
     }
     out.print(callbackData);
     out.flush();
     out.close();
   }
 
   public void info()
   {
     String no = this.request.getParameter("no");
     this.cfg = new Configuration();
 
     this.cfg.setServletContextForTemplateLoading(
       this.request.getServletContext(), "WEB-INF/templates/admin");
     Map root = new HashMap();
     root.put("no", no);
     FreemarkerUtils.freemarker(this.request, this.response, "rechargeCardChongzhi.ftl", this.cfg, root);
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
         callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", "", "");
       } else {
         int id = 0;
         try {
           id = Integer.parseInt(idStr);
         }
         catch (Exception e) {
           callbackData = BjuiJson.json("300", "参数错误", "", "", "", "", "", "");
         }
         RechargeCard findRechargeCard = (RechargeCard)this.rechargeCardService.findById(RechargeCard.class, id);
         if (findRechargeCard == null)
         {
           callbackData = BjuiJson.json("300", "充值卡不存在", "", "", "", "", "", "");
         } else {
           boolean result = this.rechargeCardService.delete(findRechargeCard);
           if (result)
             callbackData = BjuiJson.json("200", "删除成功", "", "", "", "", "", "");
           else
             callbackData = BjuiJson.json("300", "删除失败", "", "", "", "", "", "");
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
 
   public void userUseRechargeCard() {
     PrintWriter out = null;
     try {
       out = this.response.getWriter();
     } catch (IOException e) {
       e.printStackTrace();
     }
     HttpSession session = this.request.getSession();
     User loginUser = (User)session.getAttribute("loginUser");
     User findUser = (User)this.userService.findById(User.class, loginUser.getId().intValue());
     String no = this.request.getParameter("no");
     RechargeCard findRechargeCard = this.rechargeCardService.getByNo(no);
     JSONObject json = new JSONObject();
     if (findRechargeCard == null) {
       json.put("status", "0");
       json.put("message", "充值卡不存在");
     }
     else if (findRechargeCard.getStatus().intValue() == 1) {
       json.put("status", "0");
       json.put("message", "充值卡已被使用");
     }
     else {
       Financial financial = new Financial();
       financial.setType(Integer.valueOf(1));
       financial.setMoney(Double.valueOf(findRechargeCard.getMoney()));
       financial.setNo(""+System.currentTimeMillis());
 
       financial.setOperator(loginUser.getName());
 
       financial.setUser(findUser);
 
       financial.setCreateDate(new Date());
       financial.setDeleted(false);
 
       financial.setBalance(findUser.getCommission());
       financial.setPayment("充值卡充值");
       financial.setRemark("充值卡充值,充值卡卡号:" + findRechargeCard.getNo());
       this.financialService.saveOrUpdate(financial);
       findUser.setBalance(Double.valueOf(findUser.getBalance().doubleValue() + findRechargeCard.getMoney()));
       this.userService.saveOrUpdate(findUser);
 
       findRechargeCard.setStatus(Integer.valueOf(1));
       SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
       findRechargeCard.setUseTime(sdf.format(new Date()));
       findRechargeCard.setUseUserNo(findUser.getNo());
       this.rechargeCardService.saveOrUpdate(findRechargeCard);
       json.put("status", "1");
       json.put("message", "充值成功，充值金额:" + findRechargeCard.getMoney() + "元");
     }
 
     out.print(json.toString());
     out.flush();
     out.close();
   }
 
   public RechargeCard getRechargeCard() {
     return this.rechargeCard;
   }
 
   public void setRechargeCard(RechargeCard rechargeCard) {
     this.rechargeCard = rechargeCard;
   }
 }
