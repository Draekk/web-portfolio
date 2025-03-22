package com.draekkdev.springboot.web_portfolio.models.dtos;

import com.draekkdev.springboot.web_portfolio.entities.Technology;
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
public class TechnologySummaryDto {

  private Long id;

  private String name;

  private String logoUrl;

  public TechnologySummaryDto(Technology technology) {
    id = technology.getId();
    name = technology.getName();
    logoUrl = technology.getLogoUrl();
  }
}
