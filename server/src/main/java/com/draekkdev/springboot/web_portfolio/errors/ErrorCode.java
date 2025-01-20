package com.draekkdev.springboot.web_portfolio.errors;

import lombok.Getter;

@Getter
public enum ErrorCode {

    NOT_FOUND("NOT_FOUND", "Item not found", 404),
    IS_EMPTY("IS_EMPTY", "The list is empty", 404),
    NOT_SAVED("NOT_SAVED", "Item not saved", 500);

    private String errorCode;
    private String message;
    private Integer status;

    private ErrorCode(String errorCode, String message, Integer status) {
        this.errorCode = errorCode;
        this.message = message;
        this.status = status;
    }
}
