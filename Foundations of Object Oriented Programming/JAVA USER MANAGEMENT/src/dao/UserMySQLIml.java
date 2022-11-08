package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

import dto.User;

public class UserMySQLIml implements UserDAO {
    private Connection connection;
    private PreparedStatement preparedStatement;
    private ResultSet resultSet;

    private static final String INSERT = "INSERT INTO user_table (name, lastname, email, password) VALUES (?, ?, ?, ?)";
    private static final String UPDATE = "UPDATE user_table SET name = ?, lastname =  ?, password = ?, email = ? WHERE id = ?";
    private static final String DELETE = "DELETE FROM user_table WHERE id = ?";
    private static final String GET_BY_ID = "SELECT * FROM user_table WHERE id = ?";
    private static final String GET_ALL = "SELECT * FROM user_table";
    private static final String GET_BY_EMAIL_AND_PASSWORD = "SELECT * FROM user_table WHERE email = ? AND password = ?";


    public UserMySQLIml() {
        try {
            connection = DriverManager.getConnection(UserDAO.URL, UserDAO.USER, UserDAO.PASSWORD);
            System.out.println("Connected !");
        } catch (SQLException e) {
            System.out.println(" Unable to Connect !");
            e.printStackTrace();
        }
    }

    @Override
    public void insert(User user) {
        // We are using this extra variable for our own understanding that whatever operation we were doing was succesful,
        // and we want to tell the user or to us that yes these many rows were changed in database
        int rowAffected = 0;

        try {
            // preparedstatement takes a parameter which is SQL query where there maybe some dynamic values which we need to add
            preparedStatement = connection.prepareStatement(INSERT);

            // We are adding the values to the ? on the above queries we wrote by giving the index where they were and the value we get from the user object
            preparedStatement.setString(1, user.getName());
            preparedStatement.setString(2, user.getLastname());
            preparedStatement.setString(3, user.getEmail());
            preparedStatement.setString(4, user.getPassword());

            // This returns number of rows cahnged/affected that's we are assigning it to our own variable
            rowAffected = preparedStatement.executeUpdate();
            System.out.println(rowAffected + " row(s) affected");


        } catch (SQLException e) {
            System.out.println("Unable to insert data");
            e.printStackTrace();
        } finally {
            try {
                preparedStatement.close();
            } catch (SQLException e) {
                System.out.println("Unable to close the statement!");
                e.printStackTrace();
            }
        }

        if (rowAffected > 0) {
            System.out.println("Insert was succesful");
        }
    }



    @Override
    public void update(User user) {
        int rowAffected = 0;

        try {
            preparedStatement = connection.prepareStatement(UPDATE);
            preparedStatement.setString(1, user.getName());
            preparedStatement.setString(2, user.getLastname());
            preparedStatement.setString(3, user.getEmail());
            preparedStatement.setString(4, user.getPassword());
            preparedStatement.setInt(5, user.getId());

            rowAffected = preparedStatement.executeUpdate();
            System.out.println(rowAffected + " row(s) affected");


        } catch (SQLException e) {
            System.out.println("Unable to update data");
            e.printStackTrace();
        } finally {
            try {
                preparedStatement.close();
            } catch (SQLException e) {
                System.out.println("Unable to close the statement!");
                e.printStackTrace();
            }
        }

        if (rowAffected > 0) {
            System.out.println("Updatex was succesful");
        }
    }



    @Override
    public void delete(int id) {
        int rowAffected = 0;

        try {
            preparedStatement = connection.prepareStatement(DELETE);
            preparedStatement.setInt(1, id);

            rowAffected = preparedStatement.executeUpdate();
            System.out.println(rowAffected + " row(s) affected");


        } catch (SQLException e) {
            System.out.println("Unable to delete data");
            e.printStackTrace();
        } finally {
            try {
                preparedStatement.close();
            } catch (SQLException e) {
                System.out.println("Unable to close the statement!");
                e.printStackTrace();
            }
        }

        if (rowAffected > 0) {
            System.out.println("Delete was succesful");
        }
    }



    @Override
    public User getUserById(int id) {
        User user = null;

        try {
            preparedStatement = connection.prepareStatement(GET_BY_ID);
            preparedStatement.setInt(1,id);

            resultSet = preparedStatement.executeQuery();
            while(resultSet.next()) {
                user = new User();
                user.setId(resultSet.getInt("id"));
                user.setName(resultSet.getString("name"));
                user.setLastname(resultSet.getString("lastname"));
                user.setEmail(resultSet.getString("email"));
                user.setPassword(resultSet.getString("password"));
            }
        } catch (SQLException e) {
            System.out.println("Unable to find user for given id");
            e.printStackTrace();
        } finally {
            try {
                preparedStatement.close();
            } catch (SQLException e) {
                System.out.println("Unable to close the statement!");
                e.printStackTrace();
            }
        }

        return user;

    }

    @Override
    public List<User> getAll() {

        List<User> userList = new LinkedList<>();

        try {
            preparedStatement = connection.prepareStatement(GET_ALL);
            resultSet = preparedStatement.executeQuery();
            while(resultSet.next()) {
                User user = new User();
                user.setId(resultSet.getInt("id"));
                user.setName(resultSet.getString("name"));
                user.setLastname(resultSet.getString("lastname"));
                user.setEmail(resultSet.getString("email"));
                user.setPassword(resultSet.getString("password"));
                userList.add(user);
            }
        } catch (SQLException e) {
            System.out.println("Unable to find list of all users");
            e.printStackTrace();
        } finally {
            try {
                preparedStatement.close();
            } catch (SQLException e) {
                System.out.println("Unable to close the statement!");
                e.printStackTrace();
            }
        }

        return userList;

    }

    @Override
    public User getByEmailAndPassword(String email, String password) {
        User user = null;

        try {
            preparedStatement = connection.prepareStatement(GET_BY_EMAIL_AND_PASSWORD);
            preparedStatement.setString(1, email);
            preparedStatement.setString(2, password);


            resultSet = preparedStatement.executeQuery();
            while(resultSet.next()) {
                user = new User();
                user.setId(resultSet.getInt("id"));
                user.setName(resultSet.getString("name"));
                user.setLastname(resultSet.getString("lastname"));
                user.setEmail(resultSet.getString("email"));
                user.setPassword(resultSet.getString("password"));
            }
        } catch (SQLException e) {
            System.out.println("Unable to find user for given id");
            e.printStackTrace();
        } finally {
            try {
                preparedStatement.close();
            } catch (SQLException e) {
                System.out.println("Unable to close the statement!");
                e.printStackTrace();
            }
        }

        return user;

    }

    

}

