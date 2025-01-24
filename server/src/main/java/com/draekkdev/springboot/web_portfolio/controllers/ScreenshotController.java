package com.draekkdev.springboot.web_portfolio.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.draekkdev.springboot.web_portfolio.helpers.CustomMessages;
import com.draekkdev.springboot.web_portfolio.models.dtos.ResponseDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.ScreenshotDetailedDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.ScreenshotRequestDto;
import com.draekkdev.springboot.web_portfolio.services.ScreenshotService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/screenshot")
public class ScreenshotController {

    @Autowired
    private ScreenshotService service;

    @PostMapping("/create")
    public ResponseEntity<ResponseDto<ScreenshotDetailedDto>> createScreenshot(@Valid @RequestBody ScreenshotRequestDto json, HttpServletRequest request) {
        ResponseDto<ScreenshotDetailedDto> response = new ResponseDto<>(
            CustomMessages.CREATED, request.getRequestURI(), service.createScreenshot(json)
        );
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @GetMapping("/find/all")
    public ResponseEntity<ResponseDto<?>> findAllScreenshots(HttpServletRequest request) {
        ResponseDto<List<ScreenshotDetailedDto>> response = new ResponseDto<List<ScreenshotDetailedDto>>(
            CustomMessages.FOUND, request.getRequestURI(), service.findAllScreenshots()
        );
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<ResponseDto<ScreenshotDetailedDto>> findScreenshotById(@PathVariable Integer id, HttpServletRequest request) {
        ResponseDto<ScreenshotDetailedDto> response = new ResponseDto<>(
            CustomMessages.FOUND, request.getRequestURI(), service.findScreenshotById(id)
        );
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseDto<?>> deleteScreenshotById(@PathVariable Integer id, HttpServletRequest request) {
        service.deleteScreenshotById(id);
        ResponseDto<ScreenshotDetailedDto> response = new ResponseDto<>(
            CustomMessages.DELETED, request.getRequestURI(), null
        );
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }
}
