package Animal;

public class Animal {
    
    public void speak() {
        System.out.println("Wuf Wuf");
    }

    // Overloading a function means making the same function with same name
    // But adding parameters differently
    public void speak(String lang) {
        System.out.println(lang);
    }
}
