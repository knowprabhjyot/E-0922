package com.springapp3.springapp3.dao;

import org.springframework.data.repository.CrudRepository;

import com.springapp3.springapp3.entity.Project;

public interface iProjectRepository extends CrudRepository<Project, Long> {
    
}
