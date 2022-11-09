package com.javaspringbootweb.e0922.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/auth", method = RequestMethod.GET)
public class AuthController {

    // http://localhost:8080/auth/
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String def() {
        return "<h1 style='color: red'>AUTH PAGE</h1>";
    }

    // http://localhost:8080/auth/login
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login() {
        return "<h1>LOGIN PAGE</h1>";
    }

    // http://localhost:8080/auth/signup
    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public String signup() {
        return "<h1>SIGNUP PAGE</h1>";
    }
}
