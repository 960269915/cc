package com.example.security.utils;

import io.jsonwebtoken.*;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Component
public class Token {
    private static long time = 1000 * 60 * 60 * 24; //过期时间
    private static String signature = "admin"; //签名信息

    public static String create(Map<String, Object> userInfo) {
        JwtBuilder jwtBuilder = Jwts.builder();
        jwtBuilder.setHeaderParam("typ", "JWT")
                .setHeaderParam("alg", "HS256");
        userInfo.forEach((k, v) -> {
            jwtBuilder.claim(k, v);
        });
        jwtBuilder
                .setExpiration(new Date(System.currentTimeMillis() + time))
                .setId(UUID.randomUUID().toString())
                .signWith(SignatureAlgorithm.HS256, signature);
//        String jwtToken = String.valueOf(jwtBuilder
////                head
//                        .setHeaderParam("typ", "JWT")
////                算法
//                        .setHeaderParam("alg", "HS256")
////                playload(值)
//                        .claim("username", 22)
//                        .claim("userid", 33)
////                有效期
//                        .setExpiration(new Date(System.currentTimeMillis() + time))
//                        .setId(UUID.randomUUID().toString())
////                签名
//                        .signWith(SignatureAlgorithm.HS256, signature)
//                        .compact()
//        );

        //注意遍历赋值时，compact一定要写在valueOf方法里面
        String jwtToken = String.valueOf(jwtBuilder.compact());
        return jwtToken;
    }

    //    解密
    public static Map<String, Object> parse(String token) {
        Map<String, Object> userInfo = new HashMap<>();
        try {
            JwtParser jwtParser = Jwts.parser();
            Jws<Claims> claimsJws = jwtParser.setSigningKey(signature).parseClaimsJws(token);
            Claims claims = claimsJws.getBody();
            claims.forEach((k,v)->{
                userInfo.put(k,v);
            });
//            userInfo.put("username", claims.get("username"));
//            userInfo.put("userid", claims.get("userid"));
//            userInfo.put("expiration", claims.getExpiration());
            return userInfo;
        } catch (Exception exception) {
//            已过期，或者解析不正确
            userInfo.put("expiration", null);
            return userInfo;
        }
    }
}
