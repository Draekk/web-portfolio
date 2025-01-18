package com.draekkdev.springboot.web_portfolio.models.dtos;

import java.time.LocalDate;
import java.util.List;

import com.draekkdev.springboot.web_portfolio.entities.Project;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class ProjectDto {

    @Min(value = 1, message = "The ID cannot be less than 1.")
    private Long id;

    @Size(min = 3, message = "The name cannot be shorter than 3.")
    @NotNull(message = "The name cannot be null.")
    private String name;

    @NotNull(message = "The description cannot be null.")
    private String description;

    @NotNull(message = "The creation date cannot be null.")
    @PastOrPresent(message = "The creation date needs to be today or past.")
    private LocalDate creationDate;

    @NotNull(message = "The URL cannot be null.")
    private String url;

    private List<ScreenshotDto> screenshots;

    private List<TechnologyDto> technologies;

    public ProjectDto(Project project){
        id = project.getId();
        name = project.getName();
        description = project.getDescription();
        creationDate = project.getCreationDate();
        url = project.getUrl();
        
        if(project.getScreenshots() != null || !project.getScreenshots().isEmpty()) 
            screenshots = project.getScreenshots().stream().map(ScreenshotDto::new).toList();

        if(project.getTechnologies() != null || !project.getTechnologies().isEmpty())
            technologies = project.getTechnologies().stream().map(TechnologyDto::new).toList();
    }
}
