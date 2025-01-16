package com.draekkdev.springboot.web_portfolio.repositories;

import org.springframework.data.repository.CrudRepository;

import com.draekkdev.springboot.web_portfolio.entities.Project;

public interface ProjectRepository extends CrudRepository<Project, Long> {

}
