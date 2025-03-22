package com.draekkdev.springboot.web_portfolio.services;

import com.draekkdev.springboot.web_portfolio.entities.Technology;
import com.draekkdev.springboot.web_portfolio.errors.CustomException;
import com.draekkdev.springboot.web_portfolio.errors.ErrorCode;
import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyDetailedDto;
import com.draekkdev.springboot.web_portfolio.models.dtos.TechnologyRequestDto;
import com.draekkdev.springboot.web_portfolio.repositories.TechnologyRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TechnologyServiceImpl implements TechnologyService {

  @Autowired
  private TechnologyRepository technologyRepository;

  @Override
  public TechnologyDetailedDto createTechnology(TechnologyRequestDto json) {
    Technology technology = new Technology();

    if (json.getId() != null) if (
      technologyRepository.existsById(json.getId().longValue())
    ) technology.setId(json.getId()); else throw new CustomException(
      ErrorCode.NOT_FOUND,
      "The Technology ID doesn't exist."
    );

    technology.setName(json.getName().trim());

    technology.setLogoUrl(json.getLogoUrl().trim());

    Technology savedTechnology = technologyRepository.save(technology);

    return new TechnologyDetailedDto(savedTechnology);
  }

  @Override
  public List<TechnologyDetailedDto> findAllTechnologies() {
    List<Technology> technologies = (List<Technology>) technologyRepository.findAll();

    if (technologies.isEmpty()) throw new CustomException(ErrorCode.IS_EMPTY);

    return technologies.stream().map(TechnologyDetailedDto::new).toList();
  }

  @Override
  public TechnologyDetailedDto findTechnologyById(Integer id) {
    Optional<Technology> technologyOptional = technologyRepository.findById(
      id.longValue()
    );

    if (technologyOptional.isPresent()) {
      return new TechnologyDetailedDto(technologyOptional.get());
    }

    throw new CustomException(ErrorCode.NOT_FOUND);
  }

  @Override
  public List<TechnologyDetailedDto> findTechnologiesByName(String query) {
    List<Technology> technologies = technologyRepository.findByNameContaining(
      query
    );

    if (technologies.isEmpty()) throw new CustomException(ErrorCode.IS_EMPTY);

    return technologies.stream().map(TechnologyDetailedDto::new).toList();
  }

  @Override
  public void deleteTechnologyById(Integer id) {
    if (technologyRepository.existsById(id.longValue())) {
      technologyRepository.deleteById(id.longValue());
    } else {
      throw new CustomException(ErrorCode.NOT_FOUND);
    }
  }
}
