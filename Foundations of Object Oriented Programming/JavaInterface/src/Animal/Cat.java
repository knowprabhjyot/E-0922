package Animal;

public class Cat implements Animal {
    
    @Override
    public void eat() {
        System.out.println("Cat is eating food");
    }

    @Override
    public void travel() {
        System.out.println("Cat is going to the garden");

    }
}
