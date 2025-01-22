package com.draekkdev.springboot.web_portfolio.models.dtos;

import com.draekkdev.springboot.web_portfolio.entities.Screenshot;

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
public class ScreenshotSummaryDto {

    private Long id;

    private String url;

    public ScreenshotSummaryDto(Screenshot screenshot) {
        id = screenshot.getId();
        url = screenshot.getUrl();
    }
}
