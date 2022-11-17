package com.springapp3.springapp3.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;


@Entity
public class Project {
    
    // Fields
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long projectId;


    private String name;
    private String stage; // COMPLETED, CANCELED, IN-PROGRESS
    private String description;


    @ManyToMany(cascade = {
        CascadeType.MERGE,
        CascadeType.REFRESH,
        CascadeType.PERSIST
    }, 
    fetch = FetchType.LAZY
    )
    @JoinTable(name="project_employee",
    joinColumns = @JoinColumn(name="projectId"),
    inverseJoinColumns = @JoinColumn(name="employeeId"))
    List<Employee> employees;


    public Project() {
    }

    public Project(String name, String stage, String description) {
        this.name = name;
        this.stage = stage;
        this.description = description;
    }

    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }

  



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStage() {
        return stage;
    }

    public void setStage(String stage) {
        this.stage = stage;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

}