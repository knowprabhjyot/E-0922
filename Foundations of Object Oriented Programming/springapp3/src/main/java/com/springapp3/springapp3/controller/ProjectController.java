package com.springapp3.springapp3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.springapp3.springapp3.dao.iEmployeeRepository;
import com.springapp3.springapp3.dao.iProjectRepository;
import com.springapp3.springapp3.entity.Employee;
import com.springapp3.springapp3.entity.Project;

@Controller
@RequestMapping("/project")
public class ProjectController {
    
    @Autowired 
    // Autowired is used to inject certain dependencies by type so that you are able to use them
    iProjectRepository projectRepository;

    @Autowired
    iEmployeeRepository employeeRepository;


    
    @GetMapping("/new")
    public String displayProjectForm(Model model){
        model.addAttribute("project", new Project());

        List<Employee> employees = employeeRepository.findAll();
        model.addAttribute("employees", employees);

        return "project/new-project";
    }

    @PostMapping("/save")
    public String createProject(Project project, Model model) {
         projectRepository.save(project);
         return "redirect:/project/new";
    }
}
