package com.draekkdev.springboot.web_portfolio.errors.dtos;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ErrorDto {
    
    private String message;

    private String errorCode;

    private Integer status;

    private Map<String, String> details;

    private LocalDateTime timestamp;

    public ErrorDto() {
        details = new HashMap<>();
        timestamp = LocalDateTime.now();
    }

    public ErrorDto(String message, String errorCode, Integer status) {
        this.message = message;
        this.errorCode = errorCode;
        this.status = status;
        timestamp = LocalDateTime.now();
    }

    public ErrorDto(String message, String errorCode, Integer status, Map<String, String> details) {
        this.message = message;
        this.errorCode = errorCode;
        this.status = status;
        this.details = details;
        timestamp = LocalDateTime.now();
    }

}