package com.draekkdev.springboot.web_portfolio.models.dtos;

import java.time.LocalDate;
import java.util.List;

import com.draekkdev.springboot.web_portfolio.entities.Project;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class ProjectDetailedDto {

    private Long id;

    private String name;

    private String description;

    private LocalDate creationDate;

    private String url;

    private List<ScreenshotSummaryDto> screenshots;

    private List<TechnologySummaryDto> technologies;

    public ProjectDetailedDto(Project project){
        id = project.getId();
        name = project.getName();
        description = project.getDescription();
        creationDate = project.getCreationDate();
        url = project.getUrl();
        
        if(project.getScreenshots() != null && !project.getScreenshots().isEmpty()) 
            screenshots = project.getScreenshots().stream().map(ScreenshotSummaryDto::new).toList();

        if(project.getTechnologies() != null && !project.getTechnologies().isEmpty())
            technologies = project.getTechnologies().stream().map(TechnologySummaryDto::new).toList();
    }
}
