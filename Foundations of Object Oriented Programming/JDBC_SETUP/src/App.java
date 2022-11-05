import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class App {
    public static void main(String[] args) throws Exception {

        // Error Handling
        try {
            getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void getConnection() throws SQLException {
        String url = "jdbc:mysql://127.0.0.1:3306/employee_db";
        String user = "root";
        String password = "Support@123";

        // This step is used to try to connect to the MySQL server using url, user,
        // password
        Connection connection = DriverManager.getConnection(url, user, password);
        System.out.println("SQL Server succesfully connected");

        // This line means that i am setting up the statement so that I can add my SQL
        // queries
        Statement statement = connection.createStatement();

        // this statement just executes the query
        ResultSet resultSet = statement.executeQuery("SELECT * FROM emp_tb");

        // We are iterating over the result Set
        while (resultSet.next()) {
            System.out.println(
                    " ID : " + resultSet.getInt("id") + " Name: " + resultSet.getString("name") + " Department: "
                            + resultSet.getString("department") + " Salary:  " + resultSet.getInt("salary"));
        }

    }

}
