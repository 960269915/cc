package com.example.springbootmp.jwt;

import io.jsonwebtoken.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class Token {
    private static long time = 1000 * 60 * 60 * 24; //过期时间
    private static String signature = "admin"; //签名信息

    public static String create(Map<String, Object> userInfo) {
        JwtBuilder jwtBuilder = Jwts.builder();
        String jwtToken = String.valueOf(jwtBuilder
//                head
                        .setHeaderParam("typ", "JWT")
//                算法
                        .setHeaderParam("alg", "HS256")
//                playload(值)
                        .claim("username", userInfo.get("username"))
                        .claim("userid", userInfo.get("userid"))
//                有效期
                        .setExpiration(new Date(System.currentTimeMillis() + time))
                        .setId(UUID.randomUUID().toString())
//                签名
                        .signWith(SignatureAlgorithm.HS256, signature)
                        .compact()
        );
        return jwtToken;
    }

    //    解密
    public static Map<String, Object> parse(String token) {
        Map<String, Object> userInfo = new HashMap<>();
        try {
            JwtParser jwtParser = Jwts.parser();
            Jws<Claims> claimsJws = jwtParser.setSigningKey(signature).parseClaimsJws(token);
            Claims claims = claimsJws.getBody();
            userInfo.put("username", claims.get("username"));
            userInfo.put("userid", claims.get("userid"));
            userInfo.put("expiration", claims.getExpiration());
            return userInfo;
        } catch (Exception exception) {
//            已过期，或者解析不正确
            userInfo.put("expiration", null);
            return userInfo;
        }
    }
}
