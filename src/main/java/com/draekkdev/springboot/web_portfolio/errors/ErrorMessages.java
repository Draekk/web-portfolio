package com.draekkdev.springboot.web_portfolio.errors;

import com.draekkdev.springboot.web_portfolio.errors.dtos.ErrorDto;

import lombok.Getter;

@Getter
public enum ErrorMessages {

    NOT_FOUND(1, "Item not found", 404);

    private Integer id;
    private String message;
    private Integer status;

    private ErrorMessages(Integer id, String message, Integer status) {
        this.id = id;
        this.message = message;
        this.status = status;
    }

    public static ErrorDto findById(Integer id) {
        for (ErrorMessages error : ErrorMessages.values()) {
            if(error.getId().equals(id)) {
                return new ErrorDto(error.getMessage(), error.getStatus());
            }
        }
        throw new IllegalArgumentException("The id doesn't exist.");
    }
}
