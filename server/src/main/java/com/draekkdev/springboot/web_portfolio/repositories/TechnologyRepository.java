package com.draekkdev.springboot.web_portfolio.repositories;

import org.springframework.data.repository.CrudRepository;

import com.draekkdev.springboot.web_portfolio.entities.Technology;

public interface TechnologyRepository extends CrudRepository<Technology, Long> {

}
