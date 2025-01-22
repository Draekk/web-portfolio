package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.draekkdev.springboot.web_portfolio.entities.Project;
import com.draekkdev.springboot.web_portfolio.entities.Technology;
import com.draekkdev.springboot.web_portfolio.errors.CustomException;
import com.draekkdev.springboot.web_portfolio.errors.ErrorCode;
import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyDetailedDto;
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
    public TechnologyDetailedDto createTechnology(TechnologyRequestDto json) {
        try {
            Technology technology = new Technology();
            technology.setName(json.getName());

            Technology savedTechnology = technologyRepository.save(technology);

            return new TechnologyDetailedDto(savedTechnology);
            
        } catch (Exception e) {
            throw e;
        } 
    }

    @Override
    @Transactional
    public TechnologyDetailedDto editTechnology(TechnologyRequestDto json) {
        try {
            Technology technology = new Technology();
            
            if(json.getProjectIdList() != null) {
                List<Project> projects = (List<Project>)projectRepository.findAllById(json.getProjectIdList());
                technology.setProjects(projects);
            }

            technology.setId(json.getId());
            technology.setName(json.getName());

            Technology savedTechnology = technologyRepository.save(technology);

            return new TechnologyDetailedDto(savedTechnology);

        } catch (Exception e) {
            throw e;
        }
    }

    @Override
    public List<TechnologyDetailedDto> findAllTechnologies() {
        try {
            List<Technology> technologies = (List<Technology>)technologyRepository.findAll();

            if(technologies.isEmpty())
                throw new CustomException(ErrorCode.IS_EMPTY);

            return technologies.stream().map(TechnologyDetailedDto::new).toList();
            
        } catch (Exception e) {
            throw e;
        }
    }

    @Override
    public TechnologyDetailedDto findTechnologyById(Integer id) {
        try {
            Optional<Technology> technologyOptional = technologyRepository.findById(id.longValue());

            if(technologyOptional.isPresent()) {
                return new TechnologyDetailedDto(technologyOptional.get());
            }

            throw new CustomException(ErrorCode.NOT_FOUND);
        } catch (Exception e) {
            throw e;
        }
    }

    @Override
    public List<TechnologyDetailedDto> findTechnologiesByName(String query) {
        try {
            List<Technology> technologies = technologyRepository.findByNameContaining(query);

            if(technologies.isEmpty())
                throw new CustomException(ErrorCode.IS_EMPTY);

            return technologies.stream().map(TechnologyDetailedDto::new).toList();
        } catch (Exception e) {
            throw e;
        }
    }

    @Override
    public void deleteTechnologyById(Integer id) {
        try {
            if(technologyRepository.existsById(id.longValue())) {
                technologyRepository.deleteById(id.longValue());
            } else {
                throw new CustomException(ErrorCode.NOT_FOUND);
            }
        } catch (Exception e) {
            throw e;
        }
    }

}
