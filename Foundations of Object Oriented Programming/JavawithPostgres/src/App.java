import java.sql.Connection;
import java.sql.DriverManager;
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

        String INSERT_QUERY = "INSERT INTO employee_table (name, email) VALUES ('John', 'john@test.com')";

        statement.executeUpdate(INSERT_QUERY);

        System.out.println("Connected!");

    }
}
