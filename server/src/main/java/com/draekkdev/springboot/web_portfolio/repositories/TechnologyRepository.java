package com.draekkdev.springboot.web_portfolio.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.draekkdev.springboot.web_portfolio.entities.Technology;

public interface TechnologyRepository extends CrudRepository<Technology, Long> {

    List<Technology> findByNameContaining(String query);
}
