package com.springapp3.springapp3.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp3.springapp3.entity.Employee;

public interface iEmployeeRepository extends JpaRepository<Employee, Long> {

    @Override
    // We overide this function because we want to return Project type instead of
    // generic type
    public List<Employee> findAll();

}
