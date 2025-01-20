package com.draekkdev.springboot.web_portfolio.models.dtos;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class ScreenshotRequestDto {

    @Min(value = 1, message = "The ID value cannot be less than 1.")
    private Integer id;

    @NotBlank(message = "The URL value cannot be blank or null.")
    private String url;

    @Min(value = 1, message = "The Project ID value cannot be less than 1.")
    private Integer projectId;
}
