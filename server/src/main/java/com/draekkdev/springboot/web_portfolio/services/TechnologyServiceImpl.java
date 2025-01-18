package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.draekkdev.springboot.web_portfolio.entities.Technology;
import com.draekkdev.springboot.web_portfolio.errors.CustomException;
import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyRequestDto;
import com.draekkdev.springboot.web_portfolio.repositories.TechnologyRepository;

@Service
public class TechnologyServiceImpl implements TechnologyService {

    @Autowired
    private TechnologyRepository repository;

    @Override
    public TechnologyDto createTechnology(TechnologyRequestDto json) {
        try {
            Technology technology = new Technology();
            technology.setName(json.getName());

            Technology savedTechnology = repository.save(technology);

            return new TechnologyDto(savedTechnology);
            
        } catch (CustomException e) {
            throw e;
        }
    }

    @Override
    public TechnologyDto editTechnology(TechnologyRequestDto json) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'editTechnology'");
    }

    @Override
    public List<TechnologyDto> findAllTechnologies() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAllTechnologies'");
    }

    @Override
    public TechnologyDto findTechnologyById(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findTechnologyById'");
    }

    @Override
    public List<TechnologyDto> findTechnologiesByName(String query) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findTechnologiesByName'");
    }

    @Override
    public void deleteTechnologyById(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteTechnologyById'");
    }

}
