package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;

import com.draekkdev.springboot.web_portfolio.models.dtos.ScreenshotDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.ScreenshotRequestDto;

public interface ScreenshotService {

    ScreenshotDto createScreenshot(ScreenshotRequestDto json);

    List<ScreenshotDto> findAllScreenshots();

    ScreenshotDto findScreenshotById(Integer id);

    void deleteScreenshotById(Integer id);
}
