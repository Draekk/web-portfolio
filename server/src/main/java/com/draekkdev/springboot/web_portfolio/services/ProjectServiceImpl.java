package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;
import java.util.Optional;

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
        Project project = new Project();

        if(json.getId() != null)
            if(projectRepository.existsById(json.getId().longValue())) 
                project.setId(json.getId().longValue());
            else
                throw new CustomException(ErrorCode.NOT_FOUND, "The Project ID doesn't exist.");

        project.setName(json.getName().trim());
        project.setDescription(json.getDescription().trim());
        project.setUrl(json.getUrl().trim().toLowerCase());
        project.setCreationDate(json.getCreationDate());

        List<Technology> technologies = (List<Technology>)technologyRepository.findAllById(json.getTechnologyIdList());

        if(technologies.size() != json.getTechnologyIdList().size())
            throw new CustomException(ErrorCode.NOT_FOUND, "Some Technologies were not found.");

        project.setTechnologies(technologies);

        if(json.getScreenshotUrls() != null) {
            List<Screenshot> screenshots = json.getScreenshotUrls().stream()
                .filter(url -> url != null && !url.isBlank())
                .map(url -> {
                    Screenshot screenshot = new Screenshot();
                    screenshot.setUrl(url.trim().toLowerCase());
                    screenshot.setProject(project);
                    return screenshot;
                }).toList();

            List<Screenshot> savedScreenshots = (List<Screenshot>)screenshotRepository.saveAll((Iterable<Screenshot>) screenshots);
            project.setScreenshots(savedScreenshots);
        }

        Project savedProject = projectRepository.save(project);
        return new ProjectDetailedDto(savedProject);
    }

    @Override
    public List<ProjectDetailedDto> findAllProjects() {
        List<Project> projects = (List<Project>) projectRepository.findAll();
        if(projects.isEmpty())
            throw new CustomException(ErrorCode.IS_EMPTY, "Projects not found. Empty list.");
        
        return projects.stream().map(ProjectDetailedDto::new).toList();
    }

    @Override
    public ProjectDetailedDto findProjectById(Integer id) {
        Optional<Project> projectOptional = projectRepository.findById(id.longValue());

        if(projectOptional.isPresent())
            return new ProjectDetailedDto(projectOptional.get());
        
        throw new CustomException(ErrorCode.NOT_FOUND);
    }

    @Override
    public List<ProjectDetailedDto> findProjectsByName(String query) {
        List<Project> projects = projectRepository.findByNameContaining(query);

        if(projects == null || projects.isEmpty())
            throw new CustomException(ErrorCode.IS_EMPTY);

        return projects.stream().map(ProjectDetailedDto::new).toList();
    }

    @Override
    public void deleteProjectById(Integer id) {
        if(!projectRepository.existsById(id.longValue()))
            throw new CustomException(ErrorCode.NOT_FOUND);

        projectRepository.deleteById(id.longValue());
    }


}
