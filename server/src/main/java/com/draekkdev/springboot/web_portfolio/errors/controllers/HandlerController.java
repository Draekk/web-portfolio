package com.draekkdev.springboot.web_portfolio.errors.controllers;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingPathVariableException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import com.draekkdev.springboot.web_portfolio.errors.CustomException;
import com.draekkdev.springboot.web_portfolio.models.dtos.ResponseDto;

import jakarta.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class HandlerController {

    @ExceptionHandler({ CustomException.class })
    public ResponseEntity<ResponseDto<?>> customException(CustomException ex, HttpServletRequest request) {
        ResponseDto<?> response = new ResponseDto<>();
        response.setMessage(ex.getMessage());
        response.setSuccess(false);
        response.setStatusCode(ex.getStatusCode());
        response.setPath(request.getRequestURI());
        response.getError().put("errorName", ex.getErrorName());

        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @ExceptionHandler({ MethodArgumentNotValidException.class })
    public ResponseEntity<ResponseDto<?>> methodArgumentNotValid(MethodArgumentNotValidException ex,
            HttpServletRequest request) {
        ResponseDto<?> response = new ResponseDto<>();
        response.setMessage(ex.getMessage());
        response.setSuccess(false);
        response.setStatusCode(HttpStatus.BAD_REQUEST.value());
        response.setPath(request.getRequestURI());
        response.getError().put("errorName", ex.getClass().getSimpleName());

        ex.getBindingResult().getFieldErrors().forEach(e -> {
            response.getError().put(e.getField(), e.getDefaultMessage());
        });

        return ResponseEntity.badRequest().body(response);
    }

    @ExceptionHandler({
            NullPointerException.class,
            IllegalArgumentException.class,
            HttpRequestMethodNotSupportedException.class,
            DataIntegrityViolationException.class,
            HttpMessageNotReadableException.class,
            MissingPathVariableException.class,
            NoResourceFoundException.class,
            RuntimeException.class
    })
    public ResponseEntity<ResponseDto<?>> globalErrorHandler(Exception ex, HttpServletRequest request) {
        ResponseDto<?> response = new ResponseDto<>();
        response.setMessage(ex.getMessage());
        response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
        response.setSuccess(false);
        response.setPath(request.getRequestURI());
        response.getError().put("errorName", ex.getClass().getSimpleName());

        if (ex instanceof HttpRequestMethodNotSupportedException) {
            response.setStatusCode(HttpStatus.METHOD_NOT_ALLOWED.value());
            return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED.value()).body(response);
        }

        return ResponseEntity.internalServerError().body(response);
    }
}
