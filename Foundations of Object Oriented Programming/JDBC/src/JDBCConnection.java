import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCConnection {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String user = "root";
        String password = "root";

        try {
            Connection myConn = DriverManager.getConnection(url, user, password);
            System.out.println("Connection Successful");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
