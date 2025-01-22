package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.draekkdev.springboot.web_portfolio.entities.Project;
import com.draekkdev.springboot.web_portfolio.entities.Screenshot;
import com.draekkdev.springboot.web_portfolio.entities.Technology;
import com.draekkdev.springboot.web_portfolio.errors.CustomException;
import com.draekkdev.springboot.web_portfolio.errors.ErrorCode;
import com.draekkdev.springboot.web_portfolio.models.dtos.ProjectDetailedDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.ProjectRequestDto;
import com.draekkdev.springboot.web_portfolio.repositories.ProjectRepository;
import com.draekkdev.springboot.web_portfolio.repositories.ScreenshotRepository;
import com.draekkdev.springboot.web_portfolio.repositories.TechnologyRepository;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ScreenshotRepository screenshotRepository;

    @Autowired
    private TechnologyRepository technologyRepository;

    @Override
    @Transactional
    public ProjectDetailedDto createProject(ProjectRequestDto json) {
        try {
            Project project = new Project();
            project.setName(json.getName());
            project.setDescription(json.getDescription());
            project.setUrl(json.getUrl());
            project.setCreationDate(json.getCreationDate());

            List<Technology> technologies = (List<Technology>)technologyRepository.findAllById(json.getTechnologyIdList());

            if(technologies.size() != json.getTechnologyIdList().size())
                throw new CustomException(ErrorCode.NOT_FOUND);

            project.setTechnologies(technologies);


            if(json.getScreenshotUrls() != null) {
                List<Screenshot> screenshots = json.getScreenshotUrls().stream()
                .filter(url -> url != null && !url.isBlank())
                .map(url -> {
                    Screenshot screenshot = new Screenshot();
                    screenshot.setUrl(url);
                    screenshot.setProject(project);
                    return screenshot;
                }).toList();

                List<Screenshot> savedScreenshots = (List<Screenshot>)screenshotRepository.saveAll((Iterable<Screenshot>) screenshots);
                project.setScreenshots(savedScreenshots);
            }

            Project savedProject = projectRepository.save(project);
            return new ProjectDetailedDto(savedProject);


        } catch (Exception e) {
            throw e;
        }
    }

    @Override
    public ProjectDetailedDto editProject(ProjectRequestDto json) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'editProject'");
    }

    @Override
    public List<ProjectDetailedDto> findAllProjects() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAllProjects'");
    }

    @Override
    public ProjectDetailedDto findProjectById(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findProjectById'");
    }

    @Override
    public List<ProjectDetailedDto> findProjectsByName(String query) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findProjectsByName'");
    }

    @Override
    public void deleteProjectById(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteProjectById'");
    }


}
