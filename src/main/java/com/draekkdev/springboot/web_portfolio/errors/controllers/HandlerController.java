package com.draekkdev.springboot.web_portfolio.errors.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.draekkdev.springboot.web_portfolio.errors.CustomException;
import com.draekkdev.springboot.web_portfolio.errors.dtos.ErrorDto;

@RestControllerAdvice
public class HandlerController {

    @ExceptionHandler({CustomException.class})
    public ResponseEntity<ErrorDto> customException(CustomException ex) {
        return ResponseEntity.status(ex.getError().getStatus()).body(ex.getError());
    }
}
