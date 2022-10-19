import Cat.Cat;
import Dog.Dog;

public class App {
    public static void main(String[] args) throws Exception {
        final Dog husky = new Dog();

        // You cannot do that even for objects as well if they are declared as final
        // husky = new Dog();

        App.finalVariableAssignment();
    }

    public static void finalVariableAssignment() {

        // This is a final variable
        final int i = 0;

        // It cannot be reassigned
        i = 2;
    }
}
