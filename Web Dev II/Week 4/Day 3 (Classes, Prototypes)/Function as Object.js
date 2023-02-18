function Employee(name, ID, email, company) {
    this.employeeName = name;
    this.employeeID = ID;
    this.employeeEmail = email;
    this.employeeCompany = company;

    this.getEmployeeInformation = () => {
        console.log("Employee Data: ", this.employeeName, this.employeeID, this.employeeCompany, this.employeeEmail);
    }
}

let employee1 = new Employee("Prabh", 1234, "prabh@gmail.com", "CICCC");