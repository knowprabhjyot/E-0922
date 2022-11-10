package com.javaspringbootweb.e0922.web;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/", method = RequestMethod.GET)
public class AuthController {

    // http://localhost:8080/
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String def() {
        return "<h1 style='color: red'>AUTH PAGE</h1>";
    }

    // http://localhost:8080/login
    // Because if we don't pass method parameter it means by default we are talking
    // about GET METHOD
    @RequestMapping("/login")
    public String login() {
        return "<h1>LOGIN PAGE</h1>";
    }

    @RequestMapping(value = "/home", method = RequestMethod.POST)
    public String home(@RequestParam String firstName, @RequestParam String password) {
        return "<h1>Hello</h1>" + firstName + " " + password;
    }

    // http://localhost:8080/signup
    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public String signup() {
        return
        "<form action=\"/home\" method=\"POST\" >" +
        "<label for=\"fname\">First name:</label><br>" +
        "<input type='text' name='firstName' placeholder='Ex. Joe Doe'/> </br>" +
        "<label for=\"lname\">Password:</label><br>" +
        "<input type='password' name='password' placeholder='********'/> </br></br>" +
        "<input type='submit' value='Register'/>" +
        "</form>";
    }

    @RequestMapping(value="/order/{id}", method = RequestMethod.GET)
    public String order(@PathVariable String id ) {
        return "Your order ID is : " + id;
    }


    // Path variables are different from Request Params
    // order/name/value


    // RequestParams | Query Params
    // order?name=value
    


}