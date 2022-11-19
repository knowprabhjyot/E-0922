package com.springapp3.springapp3.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.springapp3.springapp3.entity.Project;

public interface iProjectRepository extends CrudRepository<Project, Long> {
    

    @Override
    // We overide this function because we want to return Project type instead of generic type
    public List<Project> findAll();
}
