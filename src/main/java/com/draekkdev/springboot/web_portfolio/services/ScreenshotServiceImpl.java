package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.draekkdev.springboot.web_portfolio.entities.Screenshot;
import com.draekkdev.springboot.web_portfolio.errors.CustomException;
import com.draekkdev.springboot.web_portfolio.models.dtos.ScreenshotDto;
import com.draekkdev.springboot.web_portfolio.repositories.ScreenshotRepository;

@Service
public class ScreenshotServiceImpl implements ScreenshotService {

    @Autowired
    private ScreenshotRepository repository;

    @Override
    public ScreenshotDto createScreenshot(ScreenshotDto screenshotDto) {
        try {
            Screenshot screenshot = new Screenshot();
            screenshot.setUrl(screenshotDto.getUrl());

            Screenshot savedScreenshot = repository.save(screenshot);

            return new ScreenshotDto(savedScreenshot);
        } catch (CustomException e) {
            throw e;
        }
    }

    @Override
    public List<ScreenshotDto> findAllScreenshots() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAllScreenshots'");
    }

    @Override
    public ScreenshotDto findScreenshotById(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findScreenshotById'");
    }

    @Override
    public void deleteScreenshotById(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteScreenshotById'");
    }

}
