package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;

import com.draekkdev.springboot.web_portfolio.models.dtos.ScreenshotDetailedDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.ScreenshotRequestDto;

public interface ScreenshotService {

    ScreenshotDetailedDto createScreenshot(ScreenshotRequestDto json);

    List<ScreenshotDetailedDto> findAllScreenshots();

    ScreenshotDetailedDto findScreenshotById(Integer id);

    void deleteScreenshotById(Integer id);
}
