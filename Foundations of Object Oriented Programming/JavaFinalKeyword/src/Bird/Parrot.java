package Bird;

public class Parrot extends Bird {

    @Override // You cannot over ride because sound was made as a final method
    public void sound() {

    }

    // However I can overload method
    public void sound(String noise) {
        
    }
    
}
