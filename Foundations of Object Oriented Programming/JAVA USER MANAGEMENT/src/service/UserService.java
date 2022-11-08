package service;

import java.util.List;

import dto.User;

public  interface UserService {
    public void insert(User user);
    public void update(User user);
    public void delete(int id);
    public User getUserById(int id);
    public List<User> getAll();
    public User getByEmailAndPassword(String email, String password);
    
}