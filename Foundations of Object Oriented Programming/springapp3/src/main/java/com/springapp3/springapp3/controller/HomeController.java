package com.springapp3.springapp3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.springapp3.springapp3.dao.iProjectRepository;
import com.springapp3.springapp3.entity.Project;

@Controller
public class HomeController {
    
    // We use autowired because we don't want to write our implmentations for now of CRUD METHODS
    @Autowired
    iProjectRepository projectRepository;


    @GetMapping("/")
    public String displayHome(Model model) {
        List<Project> projects = projectRepository.findAll();
        model.addAttribute("projects", projects);
        return "home/index";
    }
}
