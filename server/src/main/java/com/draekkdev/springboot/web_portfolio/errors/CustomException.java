package com.draekkdev.springboot.web_portfolio.errors;

import com.draekkdev.springboot.web_portfolio.errors.dtos.ErrorDto;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class CustomException extends RuntimeException {

    private ErrorDto error;

    public CustomException(ErrorCode errorCode) {
        error = new ErrorDto(errorCode.getMessage(), errorCode.getErrorCode(), errorCode.getStatus());
    }
}
