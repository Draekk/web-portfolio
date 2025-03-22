package com.draekkdev.springboot.web_portfolio.models.dtos;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import java.util.List;
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

  @NotBlank(message = "The Logo's URL value cannot be blank or null.")
  private String logoUrl;

  private List<@Min(
    value = 1,
    message = "The Project ID value cannot be less than 1."
  ) Long> projectIdList;
}
