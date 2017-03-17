 package com.hansan.fenxiao.utils;
 
 import java.security.MessageDigest;
 import java.security.NoSuchAlgorithmException;
 
 public class Md5
 {
   private static final String[] strDigits = { "0", "1", "2", "3", "4", "5", 
     "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" };
 
   private static String byteToArrayString(byte bByte)
   {
     int iRet = bByte;
     if (iRet < 0) {
       iRet += 256;
     }
     int iD1 = iRet / 16;
     int iD2 = iRet % 16;
     return strDigits[iD1] + strDigits[iD2];
   }
 
   private static String byteToString(byte[] bByte)
   {
     StringBuffer sBuffer = new StringBuffer();
     for (int i = 0; i < bByte.length; i++) {
       sBuffer.append(byteToArrayString(bByte[i]));
     }
     return sBuffer.toString();
   }
 
   public static String getMD5Code(String strObj) {
     String resultString = null;
     try {
       resultString = new String(strObj);
       MessageDigest md = MessageDigest.getInstance("MD5");
 
       resultString = byteToString(md.digest(strObj.getBytes()));
     } catch (NoSuchAlgorithmException ex) {
       ex.printStackTrace();
     }
     return resultString;
   }
 }