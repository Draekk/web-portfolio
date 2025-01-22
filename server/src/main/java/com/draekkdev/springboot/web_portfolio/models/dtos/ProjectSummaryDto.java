package com.draekkdev.springboot.web_portfolio.models.dtos;

import java.time.LocalDate;

import com.draekkdev.springboot.web_portfolio.entities.Project;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ProjectSummaryDto {

    private Long id;

    private String name;

    private String description;

    private LocalDate creationDate;
    
    private String url;

    public ProjectSummaryDto(Project project) {
        id = project.getId();
        name = project.getName();
        description = project.getDescription();
        creationDate = project.getCreationDate();
        url = project.getUrl();
    }
}
