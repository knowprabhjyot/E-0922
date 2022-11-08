
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.DriverManager;
import java.sql.SQLException;

public class App {
    public static void main(String[] args) throws Exception {

        try {
            getConnection();
        } catch (SQLException e) {
            System.out.println(e);
            System.out.println("Unable to connect!");
        }

    }

    public static void getConnection() throws SQLException {
        String url = "jdbc:mysql://127.0.0.1:3306/employee_db";
        String user = "root";
        String password = "Support@123";

        Connection connection = DriverManager.getConnection(url, user, password);
        System.out.println("Connection Successful");
        int rowAffected = 0;

        Statement statement = connection.createStatement();
        ResultSet resultSet = null;
        resultSet = statement.executeQuery("SELECT * FROM emp_tb");

        while (resultSet.next()) {
            System.out.println(
                    resultSet.getInt("id") +
                            "~ Name: " +
                            resultSet.getString("name") + " | Department:  " +
                            resultSet.getString("department") + " | Salary:  " +
                            resultSet.getInt("salary"));
        }

        rowAffected = statement.executeUpdate("UPDATE emp_tb SET salary = 100 WHERE id = 22");
        System.out.println(rowAffected + " row(s) affected!");
    }

}
