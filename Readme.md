The Critical Differences of Postgres vs MySQL:
PostgreSQL is a feature-rich database that can handle complex queries and massive databases. MySQL is a simpler database that’s fast, reliable, well understood, and easy to set up and manage. PostgreSQL is an object-relational database (ORDBMS) with features like table inheritance and function overloading, whereas MySQL is a pure relational database (RDBMS).

Most developers will tell you that MySQL is better for websites and online transactions, while PostgreSQL is better for large and complicated analytical processes. They’ll also note that PostgreSQL comes with “a slew of great features” – like extensibility and native NoSQL capabilities to help you deal with challenging database circumstances. Finally, they’ll remind you that MySQL is light on features so it can focus on “speed and reliability”.


   final String URL = "jdbc:postgresql://localhost:5432/m20922";
        final String USER = "postgres";
        final String PASSWORD = "toor";

        try {
            Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
            Statement statement = connection.createStatement();
            
            System.out.println("Connected!");
            String insertQuery = "INSERT INTO user_table (name, email) VALUES ('John', 'john@test.com')";
            String deleteQuery = "DELETE FROM user_table WHERE id = 3";
            // statement.executeUpdate(insertQuery);
            // System.out.println("Insert success!");

            statement.executeUpdate(deleteQuery);
            System.out.println("Delete is success!");

            ResultSet resultSet = statement.executeQuery("SELECT * FROM user_table");
            System.out.println("Read success!");

            while(resultSet.next()){
                System.out.println(resultSet.getString("name") + " | " + resultSet.getString("email"));
            }
            
        } catch (SQLException e) {
            System.out.println("Unable to connect!");
            e.printStackTrace();
        }