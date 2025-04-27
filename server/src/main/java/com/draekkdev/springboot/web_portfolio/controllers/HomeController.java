package com.draekkdev.springboot.web_portfolio.controllers;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping(value = {"", "/", "/api"})
public class HomeController {

    @Autowired
    private ResourceLoader resourceLoader;

    @SuppressWarnings("unchecked")
    @GetMapping
    public Map<String, Object> index() throws IOException {

        Resource resource = resourceLoader.getResource("classpath:/static/index-api.json");

        ObjectMapper objectMapper = new ObjectMapper();

        return objectMapper.readValue(resource.getInputStream(), Map.class);
    }
}
