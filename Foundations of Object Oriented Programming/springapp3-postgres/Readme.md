# JAVA JPA H2 SPRING WEB THYMELEAF APPLICATION

- spring web
- jpa
- h2
- thymeleaf
- spring devtools

---
- resourses folder: where html files are stored 
- src/main/java: where java files are stored
- src/main/resources: where html files is stored
### Project Structure


`Project.java`

```java
/*
 * @author kubilaycakmak
 * @date Nov 06, 2022
 * @version 1.0
 */
 
package com.kubilayckmk.springjavadbapp.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells to make a table out of this class
public class Project {
    
    @Id // This tells to make this field as primary key
    @GeneratedValue(strategy = GenerationType.AUTO) // This tells to make this field as auto increment
    // GenerationType.AUTO is the default value and AUTO does not need to be written
    // GenerationType.IDENTITY is the best option for MySQL
    // GenerationType.SEQUENCE is the best option for Oracle
    // GenerationType.TABLE is the best option for PostgreSQL
    // GenerationType.AUTO is the best option for H2
    private long projectId;
    private String projectName;
    private String projectStage; //INPROGRESS, COMPLETED, CANCELLED
    private String projectDescription;

    public Project() {
    }

    public Project(String projectName, String projectStage, String projectDescription) {
        this.projectName = projectName;
        this.projectStage = projectStage;
        this.projectDescription = projectDescription;
    }

    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectStage() {
        return projectStage;
    }

    public void setProjectStage(String projectStage) {
        this.projectStage = projectStage;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }
}
```

### Configure H2 db and JPA

```spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
spring.datasource.url=jdbc:h2:mem:2317d83a-f728-47ac-982b-6261ad8d758b
spring.jpa.show-sql=true
spring.thymeleaf.cache=false
# spring.th.thymeleaf.cache=false for development to disable cache
```
### Bootstrap CDN

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
```

`new-project.html`

```html
<!DOCTYPE html>
<html lang="en">
<head th:replace="layouts :: head">
</head>
<body>
    <nav th:replace="layouts :: navbar"></nav>
    <div class="container">
        <form action="/projects/save" method="POST">
            <!-- Name, Stage, Description -->
            <fieldset> 
                 <!-- fieldset is used to group related elements in a form -->
                <legend>New Project</legend> 
                <!-- legend is used to display a caption for the fieldset element -->
                <div class="form-group mb-3">
                    <!-- mb-3 is used to give margin-bottom of 1rem -->
                    <label for="name">Project Name</label>
                    <input type="text" class="form-control" th:field="${project.projectName}" placeholder="Enter Project Name">
                </div>
            
                <div class="form-group mb-3">
                    <label for="stage">Project Stage</label>
                    <select class="form-control" th:field="${project.projectStage}">
                        <option th:value="NOTSTARTED">CANCELLED</option>
                        <option th:value="COMPLETED">COMPLETED</option>
                        <option th:value="INPROGRESS">IN PROGRESS</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label for="description">Project Description</label>
                    <textarea class="form-control" th:field="${project.projectDescription}" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </fieldset>
        </form>
    </div>
</body>
</html>
```

`home.html`
```html
<!DOCTYPE html>
<html lang="en">
<head th:replace="layouts :: head">
</head>
<body>
    <nav th:replace="layouts :: navbar"></nav>
    <div class="container">
        <div class="jumbotron">
            <div class="col-md-12">
                <h2>Hello Dev!</h2>
                <p>Welcome to Project X.</p>
            </div>
        </div>
        <hr class="my-4">

        <h4>Current Projects</h4>
        <hr>

        <table class="table table-bordered table-striped">
            <thead class="thead-dark">
                <tr>
                    <th>Project Name</th>
                    <th>Project Stage</th>
                    <th>Project Description</th>
                </tr>
            </thead>
            <tbody>
                <tr th:each="field: ${projects}">
                    <th th:text="${field.projectName}"></th>
                    <th th:text="${field.projectStage}"></th>
                    <th th:text="${field.projectDescription}"></th>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

`layouts.html`
```html
<!DOCTYPE html>
<html lang="en">
<head th:fragment="head">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <title>PMA</title>
</head>
<body>
    <nav th:fragment="navbar">
        <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
              <li class="nav-item"><a href="/" class="nav-link mx-3" aria-current="page" >Home</a></li>
              <li class="nav-item"><a href="/projects/new" class="nav-link">New Project</a></li>
            </ul>
          </header>
    </nav>
</body>
</html>
```
