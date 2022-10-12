public class Car {

    // Fields for the class Car
    private String make;
    private String model;
    private String color;
    private int speed;
    private int year;
    private String owner;


    // Default Constructor
    public Car() {
        this.make = "BMW";
        this.model = "3 Series";
        this.color = "grey";
        this.speed = 0;
        this.year = 2018;
        this.owner = "Prabh";
    }

    // My Constructor becomes Dyanmic Now
    public Car(String make, String model, String owner, int speed, int year, String color) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.speed = speed;
        this.year = year;
        this.owner = owner;
    }

  
    // Getter Function get speed to access private variable
    public int getSpeed() {
        return this.speed;
    }

    // Getter Function get Owner to access private variable
    public String getOwner() {
        return this.owner;
    }

    // Getter Function get Make to access private variable
    public String getMake() {
        return this.make;
    }

    // Getter Function get Model to access private variable
    public String getModel() {
        return this.model;
    }

    // Getter Function get Color to access private variable
    public String getColor() {
        return this.color;
    }

    // Getter Function get year to access private variable
    public int getYear() {
        return this.year;
    }
        
    // Void means the function doesn't return anything
    public void accelerate() {
        this.speed = this.speed + 5;
    }

    public void brake() {
        if (this.speed > 0) {
            this.speed = this.speed - 5;
        }
    }

    public void changeColor(String newColor) {
        this.color = newColor;
    }
    
}
