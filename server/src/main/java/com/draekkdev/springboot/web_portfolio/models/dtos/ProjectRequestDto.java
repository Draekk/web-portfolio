package com.draekkdev.springboot.web_portfolio.models.dtos;

import java.time.LocalDate;
import java.util.List;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class ProjectRequestDto {

    @Min(value = 1, message = "The ID cannot be less than 1.")
    private Long id;

    @Size(min = 3, message = "The name cannot be shorter than 3.")
    @NotBlank(message = "The name cannot be blank or null.")
    private String name;

    @NotBlank(message = "The description cannot be blank or null.")
    @Size(min = 10, message = "The description needs to be larger than 10 characters.")
    private String description;

    @NotBlank(message = "The creation date cannot be blank or null.")
    @PastOrPresent(message = "The creation date needs to be today or past.")
    private LocalDate creationDate;

    @NotBlank(message = "The URL cannot be blank or null.")
    private String url;

    private List<@Min(value = 1, message = "The Screenshot ID value cannot be less than 1.") Long> screenshotIdList;

    @Size(min = 1, message = "At least one technology must be attached.")
    private List<@Min(value = 1, message = "The Technology ID value cannot be less than 1.") Long> technologyIdList;
}
