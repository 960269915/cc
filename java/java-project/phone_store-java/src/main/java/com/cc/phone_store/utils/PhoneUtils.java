package com.cc.phone_store.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PhoneUtils {
    public static List<Map<String,String>> splitTag(String tag){
            if(tag.length()<=0){
                List<Map<String,String>> list = new ArrayList<>();
                return list;
            }
            String[] tags = tag.split("&");
            List<Map<String,String>> list = new ArrayList<>();
            for (String s : tags) {
                Map<String,String> map = new HashMap<>();
                map.put("name",s);
                list.add(map);
            }
            return list;
    }
}




