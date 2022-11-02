import Person.NonVeganPerson;
// import Person.Person;
import Person.VeganPerson;

public class App {
    public static void main(String[] args) throws Exception {
        

        // Cannot instantiate the type person Java because it is abstract
        // Person p1 = new Person();

        VeganPerson daniel = new VeganPerson();
        NonVeganPerson prabh = new NonVeganPerson();

        daniel.eat();
        prabh.eat();
    }
}

