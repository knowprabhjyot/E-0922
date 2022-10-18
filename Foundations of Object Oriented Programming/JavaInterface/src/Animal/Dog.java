package Animal;

public class Dog implements Animal{
      
    @Override
    public void eat() {
        System.out.println("Dog is eating food");
    }

    @Override
    public void travel() {
        System.out.println("Dog is going to the park");

    }
}
