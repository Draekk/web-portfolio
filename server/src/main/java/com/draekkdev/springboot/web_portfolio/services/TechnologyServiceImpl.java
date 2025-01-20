package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.draekkdev.springboot.web_portfolio.entities.Project;
import com.draekkdev.springboot.web_portfolio.entities.Technology;
import com.draekkdev.springboot.web_portfolio.errors.CustomException;
import com.draekkdev.springboot.web_portfolio.errors.ErrorCode;
import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyRequestDto;
import com.draekkdev.springboot.web_portfolio.repositories.ProjectRepository;
import com.draekkdev.springboot.web_portfolio.repositories.TechnologyRepository;

@Service
public class TechnologyServiceImpl implements TechnologyService {

    @Autowired
    private TechnologyRepository technologyRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public TechnologyDto createTechnology(TechnologyRequestDto json) {
        try {
            Technology technology = new Technology();
            technology.setName(json.getName());

            Technology savedTechnology = technologyRepository.save(technology);

            return new TechnologyDto(savedTechnology);
            
        } catch (Exception e) {
            throw e;
        } 
    }

    @Override
    @Transactional
    public TechnologyDto editTechnology(TechnologyRequestDto json) {
        try {
            List<Project> projets = (List<Project>)projectRepository.findAllById(json.getProjectIdList());

            if(projets.isEmpty() || projets == null)
                throw new CustomException(ErrorCode.IS_EMPTY);
            
            Technology technology = new Technology();
            technology.setId(json.getId());
            technology.setName(json.getName());
            technology.setProjects(projets);

            Technology savedTechnology = technologyRepository.save(technology);

            return new TechnologyDto(savedTechnology);

        } catch (Exception e) {
            throw e;
        }
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
