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
public class ScreenshotDto {

    @Min(value = 1, message = "The ID cannot be less than 1.")
    private Long id;

    @NotNull(message = "The URL cannot be null.")
    private String url;

    private ProjectDto project;

    public ScreenshotDto(Screenshot screenshot) {
        id = screenshot.getId();
        url = screenshot.getUrl();
    }
}
