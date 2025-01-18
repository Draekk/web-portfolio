package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;

import com.draekkdev.springboot.web_portfolio.models.dtos.ScreenshotDto;

public interface ScreenshotService {

    ScreenshotDto createScreenshot(ScreenshotDto screenshotDto);

    List<ScreenshotDto> findAllScreenshots();

    ScreenshotDto findScreenshotById(Integer id);

    void deleteScreenshotById(Integer id);
}
