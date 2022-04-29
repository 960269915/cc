package com.example.springbootmp.vo;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class ResultVo<T> {
    private Integer code;
    private String msg;
    private T data;
}
