package com.cc.phone_store.utils;

import com.cc.phone_store.vo.ResultVo;

public class ResultUtils {
    public static ResultVo<Object> success(Object data){
        ResultVo<Object> resultVo = new ResultVo<>();
        resultVo.setCode(1);
        resultVo.setMsg("成功");
        resultVo.setData(data);
        return  resultVo;
    }
    public static ResultVo<Object> err(Object data){
        ResultVo<Object> resultVo = new ResultVo<>();
        resultVo.setCode(0);
        resultVo.setMsg("失败");
        return  resultVo;
    }
}