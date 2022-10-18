import javax.security.auth.callback.Callback;

import Animal.Cat;
import Animal.Dog;

public class App {
    public static void main(String[] args) throws Exception {
    


        // We cannot instantiate interfaces as well
        // Animal an = new Animal();

        Dog lebra = new Dog();
        lebra.eat();
        lebra.travel();


        Cat persian = new Cat();

        persian.eat();
        persian.travel();
    }
}
