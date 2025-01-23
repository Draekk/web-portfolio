package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;

import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyDetailedDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyRequestDto;

public interface TechnologyService {

    TechnologyDetailedDto createTechnology(TechnologyRequestDto json);

    List<TechnologyDetailedDto> findAllTechnologies();

    TechnologyDetailedDto findTechnologyById(Integer id);

    List<TechnologyDetailedDto> findTechnologiesByName(String query);

    void deleteTechnologyById(Integer id);

}
