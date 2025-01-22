package com.draekkdev.springboot.web_portfolio.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.draekkdev.springboot.web_portfolio.entities.Screenshot;
import com.draekkdev.springboot.web_portfolio.errors.CustomException;
import com.draekkdev.springboot.web_portfolio.errors.ErrorCode;
import com.draekkdev.springboot.web_portfolio.models.dtos.ScreenshotDetailedDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.ScreenshotRequestDto;
import com.draekkdev.springboot.web_portfolio.repositories.ScreenshotRepository;

@Service
public class ScreenshotServiceImpl implements ScreenshotService {

    @Autowired
    private ScreenshotRepository repository;

    @Override
    public ScreenshotDetailedDto createScreenshot(ScreenshotRequestDto json) {
        Screenshot screenshot = new Screenshot();
        screenshot.setUrl(json.getUrl());

        Screenshot savedScreenshot = repository.save(screenshot);

        return new ScreenshotDetailedDto(savedScreenshot);
    }

    @Override
    public List<ScreenshotDetailedDto> findAllScreenshots() {
        List<Screenshot> screenshots = (List<Screenshot>)repository.findAll();

        if(screenshots.isEmpty())
            throw new CustomException(ErrorCode.NOT_FOUND);

        return screenshots.stream().map(ScreenshotDetailedDto::new).collect(Collectors.toList());
    }

    @Override
    public ScreenshotDetailedDto findScreenshotById(Integer id) {
        Optional<Screenshot> screenshotOptional = repository.findById(id.longValue());

        if(screenshotOptional.isPresent())
            return new ScreenshotDetailedDto(screenshotOptional.get());

        throw new CustomException(ErrorCode.NOT_FOUND);
    }

    @Override
    public void deleteScreenshotById(Integer id) {
        if(repository.existsById(id.longValue()))
            repository.deleteById(id.longValue());
        else
            throw new CustomException(ErrorCode.NOT_FOUND);
    }

}
