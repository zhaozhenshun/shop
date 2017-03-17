package com.hansan.fenxiao.utils;

import com.hansan.fenxiao.entities.Config;
import com.hansan.fenxiao.service.IConfigService;
import java.util.Properties;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.Message.RecipientType;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class MailSenderUtils
{
  public static boolean sendMail(String email, String content, String title, HttpServletRequest request)
  {
    ServletContext context = request.getServletContext();
    ApplicationContext ctx = WebApplicationContextUtils.getRequiredWebApplicationContext(context);

    IConfigService configService = (IConfigService)ctx.getBean("configService");
    Config config = (Config)configService.findById(Config.class, 1);

    final String userName = config.getSendEmail();
    final String passWord = config.getSendEmailPass();
    String smtp = config.getSendEmailSmtp();

    Properties props = new Properties();
    props.setProperty("mail.smtp.auth", "true");
    props.setProperty("mail.transport.protocol", "smtp");
    props.setProperty("mail.host", smtp);
   /* Session session = Session.getInstance(props, new Authenticator(userName, passWord) {
      protected PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication(MailSenderUtils.this, this.val$passWord);
      }
    });
    
    */
    Session session = Session.getDefaultInstance(props, new Authenticator() {             
    	protected PasswordAuthentication getPasswordAuthentication() {                
    		return new PasswordAuthentication(userName,passWord);   
    		}    
    	}); 
    
    Message msg = new MimeMessage(session);
    session.setDebug(false);
    try {
      msg.setFrom(new InternetAddress(userName));
      msg.setSubject(title);
      msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
      msg.setContent(content, "text/html;charset=utf-8");
      Transport.send(msg);
    }
    catch (MessagingException e) {
      return false;
    }
    return true;
  }
}