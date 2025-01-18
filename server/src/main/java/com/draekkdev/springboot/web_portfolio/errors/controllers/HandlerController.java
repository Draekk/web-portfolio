package com.draekkdev.springboot.web_portfolio.errors.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> methodArgumentNotValid(MethodArgumentNotValidException ex) {
        Map<String, String> errorMap = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(e -> errorMap.put(e.getField(), e.getDefaultMessage()));

        return ResponseEntity.badRequest().body(errorMap);
    }
}
