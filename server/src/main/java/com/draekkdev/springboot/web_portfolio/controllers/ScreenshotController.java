package com.draekkdev.springboot.web_portfolio.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.draekkdev.springboot.web_portfolio.models.dtos.ScreenshotDto;
import com.draekkdev.springboot.web_portfolio.services.ScreenshotService;

import jakarta.validation.Valid;

@RestController
public class ScreenshotController {

    @Autowired
    private ScreenshotService scService;

    @PostMapping("/test")
    public ResponseEntity<?> test(@Valid @RequestBody ScreenshotDto json) {
        return ResponseEntity.ok().body(scService.createScreenshot(json));
    }
}
