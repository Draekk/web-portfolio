package com.draekkdev.springboot.web_portfolio.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/test/{id}")
    public ResponseEntity<?> test(@PathVariable Integer id) {
        return ResponseEntity.ok().body(scService.findScreenshotById(id));
    }
}
