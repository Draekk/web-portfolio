package com.draekkdev.springboot.web_portfolio.errors;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class CustomException extends RuntimeException {

    private String message;

    private String errorName;

    private int statusCode;

    public CustomException(ErrorCode errorCode) {
        message = errorCode.getMessage();
        errorName = errorCode.getErrorCode();
        this.statusCode = errorCode.getStatus();
    }

    public CustomException(ErrorCode errorCode, String message) {
        this.message = message;
        errorName = errorCode.getErrorCode();
        this.statusCode = errorCode.getStatus();
    }
}
