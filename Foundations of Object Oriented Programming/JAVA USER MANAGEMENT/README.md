## USER MANAGEMENT SYSTEM

### Keywords;

`DTO` is an abbreviation for `Data Transfer Object`, so it is used to transfer the data between classes and modules of your application.

DTO should only contain private fields for your data, getters, setters, and constructors.
DTO is not recommended to add business logic methods to such classes, but it is OK to add some util methods.

`DAO` is an abbreviation for `Data Access Object`, so it should encapsulate the logic for retrieving, saving and updating data in your data storage (a database, a file-system, whatever).

``` REFERANCE FROM ``` https://stackoverflow.com/a/14366441


```sql
CREATE DATABASE user;
use user;

CREATE TABLE user_table (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NULL,
  lastname VARCHAR(45) NULL,
  email VARCHAR(45) NULL,
  password VARCHAR(45) NULL,
  PRIMARY KEY (id));

desc user;
```