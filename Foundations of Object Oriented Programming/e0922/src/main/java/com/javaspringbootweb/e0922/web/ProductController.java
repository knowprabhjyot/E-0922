package com.javaspringbootweb.e0922.web;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javaspringbootweb.e0922.domain.Product;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    
// http://localhost:8080/product
    @RequestMapping("/")
    public List<Product> products() {
        return Arrays.asList(
            new Product(1, "Tshirt", "Top class Cotton Tshirts", 200.0),
            new Product(2, "Shoes", "High ankle shoes", 300.0),
            new Product(3, "Jeans", "Top class Jeans", 400.0),
            new Product(4, "Muffler", "Top class Cotton Muffler", 150.0)
        );
    }

    // http://localhost:8080/product/10
    @RequestMapping("/{id}")
    public Product getProductById(@PathVariable String id) {
        return new Product(1, "Tshirt", "Top class Cotton Tshirts", 200.0);
    }


    // We are sending JSON data
    // JSON --> Javascript Object Notation
    // Its similar to objects , but here the keys are also strings
    @RequestMapping("/orders")
    public List<String> orders() {
        return Arrays.asList("Order 1", "Order 2", "Order 3");
    }


 
}
