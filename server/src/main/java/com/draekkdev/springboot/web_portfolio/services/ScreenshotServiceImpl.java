package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.draekkdev.springboot.web_portfolio.entities.Screenshot;
import com.draekkdev.springboot.web_portfolio.errors.CustomException;
import com.draekkdev.springboot.web_portfolio.errors.ErrorCode;
import com.draekkdev.springboot.web_portfolio.models.dtos.ScreenshotDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.ScreenshotRequestDto;
import com.draekkdev.springboot.web_portfolio.repositories.ScreenshotRepository;

@Service
public class ScreenshotServiceImpl implements ScreenshotService {

    @Autowired
    private ScreenshotRepository repository;

    @Override
    public ScreenshotDto createScreenshot(ScreenshotRequestDto json) {
        try {
            Screenshot screenshot = new Screenshot();
            screenshot.setUrl(json.getUrl());

            Screenshot savedScreenshot = repository.save(screenshot);

            return new ScreenshotDto(savedScreenshot);
        } catch (Exception e) {
            throw e;
        }
    }

    @Override
    public List<ScreenshotDto> findAllScreenshots() {
        try {
            List<Screenshot> screenshots = (List<Screenshot>)repository.findAll();

            if(screenshots.isEmpty())
                throw new CustomException(ErrorCode.NOT_FOUND);

            return screenshots.stream().map(ScreenshotDto::new).collect(Collectors.toList());
        } catch (Exception e) {
            throw e;
        }
    }

    @Override
    public ScreenshotDto findScreenshotById(Integer id) {
        try {
            Optional<Screenshot> screenshotOptional = repository.findById(id.longValue());

            if(screenshotOptional.isPresent())
                return new ScreenshotDto(screenshotOptional.get());

            throw new CustomException(ErrorCode.NOT_FOUND);
            
        } catch (CustomException e) {
            throw e;
        }
    }

    @Override
    public void deleteScreenshotById(Integer id) {
        try {
            repository.deleteById(id.longValue());
            
        } catch (CustomException e) {
            throw e;
        }
    }

}
