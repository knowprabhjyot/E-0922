package Car;

public class Car {

    // These are just private variables
    private String name;
    private String engine;

    // We are creating a static variable
    public static int numberOfCars;

    // Default Constructor
    public Car() {

    }

    // Parametrized constructor
    public Car(String name, String engine) {
        this.name = name;
        this.engine = engine;
        numberOfCars++;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEngine() {
        return engine;
    }

    public void setEngine(String engine) {
        this.engine = engine;
    }

}
