package com.draekkdev.springboot.web_portfolio.models.dtos;

import java.util.List;

import com.draekkdev.springboot.web_portfolio.entities.Technology;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class TechnologyDetailedDto {

    private Long id;
    
    private String name;

    private List<ProjectSummaryDto> projects;

    public TechnologyDetailedDto(Technology technology) {
        id = technology.getId();
        name = technology.getName();
        if(technology.getProjects() != null)
            projects = technology.getProjects().stream().map(ProjectSummaryDto::new).toList();
    }
}
