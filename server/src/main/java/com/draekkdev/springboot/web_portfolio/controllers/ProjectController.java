package com.draekkdev.springboot.web_portfolio.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.draekkdev.springboot.web_portfolio.helpers.CustomMessages;
import com.draekkdev.springboot.web_portfolio.models.dtos.ProjectDetailedDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.ProjectRequestDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.ResponseDto;
import com.draekkdev.springboot.web_portfolio.services.ProjectService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService service;

    @PostMapping("/create")
    public ResponseEntity<ResponseDto<ProjectDetailedDto>> createProject(@Valid @RequestBody ProjectRequestDto json, HttpServletRequest request) {
        ResponseDto<ProjectDetailedDto> response = new ResponseDto<>(
            CustomMessages.CREATED, request.getRequestURI(), service.createProject(json)
        );
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @PutMapping("/update")
    public ResponseEntity<ResponseDto<ProjectDetailedDto>> updateProject(@Valid @RequestBody ProjectRequestDto json, HttpServletRequest request) {
        ResponseDto<ProjectDetailedDto> response = new ResponseDto<>(
            CustomMessages.UPDATED, request.getRequestURI(), service.createProject(json)
        );
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @GetMapping({"", "/", "/find", "/find/all"})
    public ResponseEntity<ResponseDto<?>> findAllProjects(HttpServletRequest request) {
        ResponseDto<List<ProjectDetailedDto>> response = new ResponseDto<>(
            CustomMessages.FOUND, request.getRequestURI(), service.findAllProjects()
        );
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @GetMapping({"/find/{id}", "/find/id/{id}"})
    public ResponseEntity<ResponseDto<ProjectDetailedDto>> findProjectById(@PathVariable Integer id, HttpServletRequest request) {
        ResponseDto<ProjectDetailedDto> response = new ResponseDto<ProjectDetailedDto>(
            CustomMessages.FOUND, request.getRequestURI(), service.findProjectById(id)
        );
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @GetMapping("/find/name/{query}")
    public ResponseEntity<ResponseDto<?>> findProjectsByName(@PathVariable String query, HttpServletRequest request) {
        ResponseDto<List<ProjectDetailedDto>> response = new ResponseDto<List<ProjectDetailedDto>>(
            CustomMessages.FOUND, request.getRequestURI(), service.findProjectsByName(query)
        );
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @DeleteMapping({"/delete/{id}", "/delete/id/{id}"})
    public ResponseEntity<ResponseDto<?>> deleteProjectById(@PathVariable Integer id, HttpServletRequest request) {
        service.deleteProjectById(id);
        ResponseDto<ProjectDetailedDto> response = new ResponseDto<ProjectDetailedDto>(
            CustomMessages.DELETED, request.getRequestURI(), null
        );
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }
}
