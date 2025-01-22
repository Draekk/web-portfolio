package com.draekkdev.springboot.web_portfolio.models.dtos;

import com.draekkdev.springboot.web_portfolio.entities.Screenshot;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class ScreenshotDetailedDto {

    @Min(value = 1, message = "The ID cannot be less than 1.")
    private Long id;

    @NotNull(message = "The URL cannot be null.")
    private String url;

    private ProjectDetailedDto project;

    public ScreenshotDetailedDto(Screenshot screenshot) {
        id = screenshot.getId();
        url = screenshot.getUrl();

        if(screenshot.getProject() != null)
            project = new ProjectDetailedDto(screenshot.getProject());
    }
}
