package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;

import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyDto;

public interface TechnologyService {

    TechnologyDto createTechnology(TechnologyDto technologyDto);

    TechnologyDto editTechnology(TechnologyDto technologyDto);

    List<TechnologyDto> findAllTechnologies();

    TechnologyDto findTechnologyById(Integer id);

    List<TechnologyDto> findTechnologiesByName(String query);

    void deleteTechnologyById(Integer id);
}
