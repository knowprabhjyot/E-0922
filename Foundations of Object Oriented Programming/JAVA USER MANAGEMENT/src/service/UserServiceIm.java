package service;

import java.util.List;

import dao.UserDAO;
import dao.UserMySQLIml;
import dto.User;

public class UserServiceIm implements UserService {
    private UserDAO userDAO = new UserMySQLIml();

    @Override
    public void insert(User user) {
        userDAO.insert(user);
    }   

    @Override
    public void update(User user) {
        userDAO.update(user);
    }

    @Override
    public void delete(int id) {
        userDAO.delete(id);
    }

    @Override
    public User getUserById(int id) {
        return userDAO.getUserById(id);
    }

    @Override
    public List<User> getAll() {
        return userDAO.getAll();
    }

    @Override
    public User getByEmailAndPassword(String email, String password) {
        return userDAO.getByEmailAndPassword(email, password);
    }

    


}
