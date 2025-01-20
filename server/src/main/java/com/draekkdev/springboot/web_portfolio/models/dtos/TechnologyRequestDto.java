package com.draekkdev.springboot.web_portfolio.models.dtos;

import java.util.List;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class TechnologyRequestDto {

    @Min(value = 1, message = "The ID value cannot be less than 1.")
    private Long id;

    @NotBlank(message = "The name value cannot be blank or null.")
    private String name;

    private List<@Min(value = 1, message = "The Project ID value cannot be less than 1.") Long> projectIdList;
}
