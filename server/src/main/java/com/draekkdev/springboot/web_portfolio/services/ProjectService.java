package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;

import com.draekkdev.springboot.web_portfolio.models.dtos.ProjectDetailedDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.ProjectRequestDto;

public interface ProjectService {

    ProjectDetailedDto createProject(ProjectRequestDto json);

    ProjectDetailedDto editProject(ProjectRequestDto json);

    List<ProjectDetailedDto> findAllProjects();

    ProjectDetailedDto findProjectById(Integer id);

    List<ProjectDetailedDto> findProjectsByName(String query);

    void deleteProjectById(Integer id);
}
