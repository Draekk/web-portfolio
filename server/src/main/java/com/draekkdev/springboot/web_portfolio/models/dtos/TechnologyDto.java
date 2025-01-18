package com.draekkdev.springboot.web_portfolio.models.dtos;

import java.util.List;

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
public class TechnologyDto {

    @Min(value = 1)
    private Long id;
    
    @NotNull
    private String name;

    private List<ProjectDto> projects;
}
