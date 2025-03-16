package com.draekkdev.springboot.web_portfolio.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = {"", "/", "/api"})
public class HomeController {

    @GetMapping(value = {"", "/", "/home", "/index"})
    public String home() {
        return "Welcome to my Web Portfolio!";
    }
}
