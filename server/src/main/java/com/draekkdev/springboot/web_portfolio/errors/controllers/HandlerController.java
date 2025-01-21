package com.draekkdev.springboot.web_portfolio.errors.controllers;

import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
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

    @ExceptionHandler({MethodArgumentNotValidException.class})
    public ResponseEntity<ErrorDto> methodArgumentNotValid(MethodArgumentNotValidException ex) {
        ErrorDto error = new ErrorDto();
        error.setMessage(ex.getMessage());
        error.setErrorCode(ex.getClass().getSimpleName());
        error.setStatus(HttpStatus.BAD_REQUEST.value());
        
        ex.getBindingResult().getFieldErrors().forEach(e -> {
            error.getDetails().put(e.getField(), e.getDefaultMessage());
        });

        return ResponseEntity.badRequest().body(error);
    }

    @ExceptionHandler({NullPointerException.class, /*DataAccessException.class,*/ HttpRequestMethodNotSupportedException.class})
    public ResponseEntity<ErrorDto> globalErrorHandler(Exception ex) {
        ErrorDto error = new ErrorDto();
        error.setErrorCode(ex.getClass().getSimpleName());
        error.setMessage(ex.getMessage());
        
        if(ex instanceof HttpRequestMethodNotSupportedException) {
            error.setStatus(HttpStatus.METHOD_NOT_ALLOWED.value());
            return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED.value()).body(error);
        }
        
        error.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        return ResponseEntity.internalServerError().body(error);
    }
}
