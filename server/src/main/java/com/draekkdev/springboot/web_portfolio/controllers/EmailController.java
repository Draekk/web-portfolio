package com.draekkdev.springboot.web_portfolio.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.draekkdev.springboot.web_portfolio.helpers.CustomMessages;
import com.draekkdev.springboot.web_portfolio.models.dtos.ContactRequestDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.ResponseDto;
import com.draekkdev.springboot.web_portfolio.services.EmailService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/mail")
public class EmailController {

    @Autowired
    private EmailService service;

    @PostMapping("/send")
    public ResponseEntity<ResponseDto<?>> sendContact(@Valid @RequestBody ContactRequestDto contactRequest,
            HttpServletRequest request) {
        service.sendContactEmail(contactRequest);
        ResponseDto<String> response = new ResponseDto<String>(
                CustomMessages.SENT, request.getRequestURI(), CustomMessages.SENT.getMessage());
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }
}
