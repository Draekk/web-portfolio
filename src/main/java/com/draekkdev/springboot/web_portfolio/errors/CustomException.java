package com.draekkdev.springboot.web_portfolio.errors;

import com.draekkdev.springboot.web_portfolio.errors.dtos.ErrorDto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class CustomException extends RuntimeException {

    private ErrorDto error;

    public CustomException(Integer id) {
        error = ErrorMessages.findById(id);
    }

    public CustomException(ErrorMessages errorMessage) {
        error = new ErrorDto(errorMessage.getMessage(), errorMessage.getStatus());
    }

}
