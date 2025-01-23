package com.draekkdev.springboot.web_portfolio.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.draekkdev.springboot.web_portfolio.entities.Project;

public interface ProjectRepository extends CrudRepository<Project, Long> {

    List<Project> findByNameContaining(String query);
}
