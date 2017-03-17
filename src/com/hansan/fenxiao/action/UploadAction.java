 package com.hansan.fenxiao.action;
 
 import com.opensymphony.xwork2.ActionContext;
 import com.opensymphony.xwork2.ActionSupport;
 import java.io.File;
 import java.io.IOException;
 import java.io.PrintWriter;
 import java.text.SimpleDateFormat;
 import java.util.Date;
 import java.util.List;
 import java.util.UUID;
 import javax.servlet.ServletContext;
 import javax.servlet.http.HttpServletResponse;
 import org.apache.commons.io.FileUtils;
 import org.apache.struts2.ServletActionContext;
 import org.json.JSONException;
 import org.json.JSONObject;
 import org.springframework.context.annotation.Scope;
 import org.springframework.stereotype.Controller;
 
 @Controller("uploadAction")
 @Scope("prototype")
 public class UploadAction extends ActionSupport
 {
   private static final long serialVersionUID = -4848248679889814408L;
   private List<File> Filedata;
   private List<String> FiledataFileName;
   private List<String> FiledataContentType;
   private String name;
 
   public void doUpload()
   {
     ActionContext ac = ActionContext.getContext();
     ServletContext sc = (ServletContext)ac
       .get("com.opensymphony.xwork2.dispatcher.ServletContext");
     String savePath = sc.getRealPath("/");
     SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
     String ymd = sdf.format(new Date());
     String path = "upload/" + ymd + "/";
     savePath = savePath + path;
     File f1 = new File(savePath);
     if (!f1.exists()) {
       f1.mkdirs();
     }
     int size = this.Filedata.size();
     String extName = null;
     String name = null;
     for (int i = 0; i < size; i++) {
       extName = ((String)this.FiledataFileName.get(i)).substring(
         ((String)this.FiledataFileName.get(i)).lastIndexOf("."));
       name = UUID.randomUUID().toString();
       File file = new File(savePath + name + extName);
       try {
         FileUtils.copyFile((File)this.Filedata.get(i), file);
       } catch (IOException e) {
         e.printStackTrace();
       }
     }
     HttpServletResponse response = ServletActionContext.getResponse();
     try {
       JSONObject json = new JSONObject();
       json.put("statusCode", 200);
       json.put("message", "");
       json.put("filename", path + name + extName);
       response.getWriter().print(json.toString());
       response.getWriter().flush();
       response.getWriter().close();
     } catch (IOException e) {
       e.printStackTrace();
     } catch (JSONException e) {
       e.printStackTrace();
     }
   }
 
   public List<File> getFiledata() {
     return this.Filedata;
   }
 
   public void setFiledata(List<File> filedata) {
     this.Filedata = filedata;
   }
 
   public List<String> getFiledataFileName() {
     return this.FiledataFileName;
   }
 
   public void setFiledataFileName(List<String> filedataFileName) {
     this.FiledataFileName = filedataFileName;
   }
 
   public List<String> getFiledataContentType() {
     return this.FiledataContentType;
   }
 
   public void setFiledataContentType(List<String> filedataContentType) {
     this.FiledataContentType = filedataContentType;
   }
 
   public String getName() {
     return this.name;
   }
 
   public void setName(String name) {
     this.name = name;
   }
 }