import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class App {
    public static void main(String[] args) throws Exception {
        final String URL = "jdbc:postgresql://localhost:5432/e0922";
        final String USER = "postgres";
        final String PASSWORD = "root@123";

        try {
            getConnection(URL, USER, PASSWORD);
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    // Something is wrong here we need to fix it!
    public static void getConnection(String URL, String USER, String PASSWORD) throws SQLException {
        Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
        Statement statement = connection.createStatement();

        // String INSERT_QUERY = "INSERT INTO employee_table (name, email) VALUES ('Mike', 'mike@gmail.com')";
// 
        // statement.executeUpdate(INSERT_QUERY);

        // String DELETE_QUERY = "DELETE FROM employee_table WHERE ID = 2";

        // statement.executeUpdate(DELETE_QUERY);

        ResultSet resultSet = statement.executeQuery("SELECT * FROM employee_table");


        // Update a row in postgres



        System.out.println("READ SUCCESFUL!");

        while(resultSet.next()) {
            System.out.print(resultSet.getString("name") + " | " + resultSet.getString("email"));
        }


        System.out.println("Connected!");

    }
}
