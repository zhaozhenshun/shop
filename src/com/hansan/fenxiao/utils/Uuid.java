 package com.hansan.fenxiao.utils;
 
 import java.util.UUID;
 
 public class Uuid
 {
   public static String getUUID()
   {
     UUID uuid = UUID.randomUUID();
     String str = uuid.toString();
 
     String temp = str.replace("-", "");
     return temp;
   }
 
   public static String[] getUUID(int number) {
     if (number < 1) {
       return null;
     }
     String[] ss = new String[number];
     for (int i = 0; i < number; i++) {
       ss[i] = getUUID();
     }
     return ss;
   }
 }