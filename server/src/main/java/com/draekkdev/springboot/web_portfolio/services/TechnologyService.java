package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;

import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyRequestDto;

public interface TechnologyService {

    TechnologyDto createTechnology(TechnologyRequestDto json);

    TechnologyDto editTechnology(TechnologyRequestDto json);

    List<TechnologyDto> findAllTechnologies();

    TechnologyDto findTechnologyById(Integer id);

    List<TechnologyDto> findTechnologiesByName(String query);

    void deleteTechnologyById(Integer id);
}
