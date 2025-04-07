package com.draekkdev.springboot.web_portfolio.models.dtos;

import com.draekkdev.springboot.web_portfolio.entities.Project;
import java.time.LocalDate;
import java.util.List;
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

  private List<ScreenshotSummaryDto> screenshots;

  private List<TechnologySummaryDto> technologies;

  public ProjectSummaryDto(Project project) {
    id = project.getId();
    name = project.getName();
    description = project.getDescription();
    creationDate = project.getCreationDate();
    url = project.getUrl();
    if (project.getScreenshots().size() > 0) {
      screenshots =
        project
          .getScreenshots()
          .stream()
          .map(ScreenshotSummaryDto::new)
          .toList();
    }

    if (project.getTechnologies().size() > 0) {
      technologies =
        project
          .getTechnologies()
          .stream()
          .map(TechnologySummaryDto::new)
          .toList();
    }
  }
}
