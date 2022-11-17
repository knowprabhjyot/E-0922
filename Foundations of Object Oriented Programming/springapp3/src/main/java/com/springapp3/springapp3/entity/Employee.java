package com.springapp3.springapp3.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.JoinColumn;

@Entity // This makes the table using JPA inside H2
public class Employee {

    @Id // Makes the primary key
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long employeeId;

    private String firstName;
    private String lastName;
    private String email;


    @ManyToMany(cascade = {
        CascadeType.MERGE,
        CascadeType.REFRESH,
        CascadeType.PERSIST
    }, 
    fetch = FetchType.LAZY
    )
    @JoinTable(name="project_employee",
    joinColumns = @JoinColumn(name="employeeId"),
    inverseJoinColumns = @JoinColumn(name="projectId"))
    private List<Project> projects;


    public Employee() {

    }

    // Parametrized Constructor
    public Employee(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



    // Why i am using to string method, becuase on html i will direct call employee object 
    // and that will return this.firstName + this.lastName
    @Override
    public String toString() {
        return this.firstName + " " + this.lastName;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

}
