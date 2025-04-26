package com.draekkdev.springboot.web_portfolio.controllers;

import com.draekkdev.springboot.web_portfolio.helpers.CustomMessages;
import com.draekkdev.springboot.web_portfolio.models.dtos.ResponseDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyDetailedDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyRequestDto;
import com.draekkdev.springboot.web_portfolio.services.TechnologyService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
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

@RestController
@RequestMapping("/api/technology")
public class TechnologyController {

  @Autowired
  private TechnologyService service;

  @PostMapping("/create")
  public ResponseEntity<ResponseDto<TechnologyDetailedDto>> createTechnology(
    @Valid @RequestBody TechnologyRequestDto json,
    HttpServletRequest request
  ) {
    ResponseDto<TechnologyDetailedDto> response = new ResponseDto<>(
      CustomMessages.CREATED,
      request.getRequestURI(),
      service.createTechnology(json)
    );
    return ResponseEntity.status(response.getStatusCode()).body(response);
  }

  @PutMapping("/update")
  public ResponseEntity<ResponseDto<TechnologyDetailedDto>> updateTechnology(
    @Valid @RequestBody TechnologyRequestDto json,
    HttpServletRequest request
  ) {
    ResponseDto<TechnologyDetailedDto> response = new ResponseDto<>(
      CustomMessages.UPDATED,
      request.getRequestURI(),
      service.createTechnology(json)
    );
    return ResponseEntity.status(response.getStatusCode()).body(response);
  }

  @GetMapping("/find/all")
  public ResponseEntity<ResponseDto<?>> findAllTechnologies(
    HttpServletRequest request
  ) {
    ResponseDto<List<TechnologyDetailedDto>> response = new ResponseDto<>(
      CustomMessages.FOUND,
      request.getRequestURI(),
      service.findAllTechnologies()
    );
    return ResponseEntity.status(response.getStatusCode()).body(response);
  }

  @GetMapping("/find/id/{id}")
  public ResponseEntity<ResponseDto<TechnologyDetailedDto>> findTechnologyById(
    @PathVariable Integer id,
    HttpServletRequest request
  ) {
    ResponseDto<TechnologyDetailedDto> response = new ResponseDto<TechnologyDetailedDto>(
      CustomMessages.FOUND,
      request.getRequestURI(),
      service.findTechnologyById(id)
    );
    return ResponseEntity.status(response.getStatusCode()).body(response);
  }

  @GetMapping("/find/name/{query}")
  public ResponseEntity<ResponseDto<?>> findTechnologiesByName(
    @PathVariable String query,
    HttpServletRequest request
  ) {
    ResponseDto<List<TechnologyDetailedDto>> response = new ResponseDto<>(
      CustomMessages.FOUND,
      request.getRequestURI(),
      service.findTechnologiesByName(query)
    );
    return ResponseEntity.status(response.getStatusCode()).body(response);
  }

  @DeleteMapping("/delete/id/{id}")
  public ResponseEntity<ResponseDto<?>> deleteTechnologyById(
    @PathVariable Integer id,
    HttpServletRequest request
  ) {
    service.deleteTechnologyById(id);
    ResponseDto<TechnologyDetailedDto> response = new ResponseDto<>(
      CustomMessages.DELETED,
      request.getRequestURI(),
      null
    );
    return ResponseEntity.status(response.getStatusCode()).body(response);
  }
}
