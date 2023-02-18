class Student {
 
    constructor(name, email, college) {
        // This Keyword
        this.studentName = name;
        this.studentEmail = email;
        this.studentCollege = college;
    }

    goesToCollege() {
        console.log("Walking towards the college");
    }
}

let akito = new Student('Akito', 'akito@ciccc.ca', 'CICCC');
let yuki = new Student('Yuki', 'yuki@ciccc.ca', 'CICCC');

akito.goesToCollege(); // This is also a behaviour  

let obj = {} // Literal Objects
