package com.draekkdev.springboot.web_portfolio.models.dtos;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ResponseDto<T> {

    private String message;

    private Boolean success;

    private Integer statusCode;

    private String path;

    private LocalDateTime timestamp;

    private T data;

    private Map<String, Object> error;

    public ResponseDto() {
        success = true;
        timestamp = LocalDateTime.now();
        error = new HashMap<>();
    }

    public ResponseDto(String message, Integer statusCode, String path, T data) {
        this.message = message;
        this.statusCode = statusCode;
        this.path = path;
        this.data = data;
        success = true;
        timestamp = LocalDateTime.now();
    }

    
}
