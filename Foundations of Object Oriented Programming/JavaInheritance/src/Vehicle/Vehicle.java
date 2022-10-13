package Vehicle;

public class Vehicle {

    private int wheels;
    private int seats;
    private String fuelTank;
    private int light;
    public int speed;


    // Parameterized Constructor
    public Vehicle(int wheels, int seats, String fuelTank, int light) {
        this.wheels = wheels;
        this.seats = seats;
        this.fuelTank = fuelTank;
        this.light = light;
    }

    // Defualt Constructor
    public Vehicle() {

    }

    public int getWheels() {
        return wheels;
    }
    public void setWheels(int wheels) {
        this.wheels = wheels;
    }
    public int getSeats() {
        return seats;
    }
    public void setSeats(int seats) {
        this.seats = seats;
    }
    public String getFuelTank() {
        return fuelTank;
    }
    public void setFuelTank(String fuelTank) {
        this.fuelTank = fuelTank;
    }
    public int getLight() {
        return light;
    }
    public void setLight(int light) {
        this.light = light;
    }

    public void accelerate() {
        this.speed += 5;
        System.out.println("Speed of Bike Now : " + this.speed);
    }


    public void start() {
        System.out.println("Vroom Vroom!");
    }
    
}
