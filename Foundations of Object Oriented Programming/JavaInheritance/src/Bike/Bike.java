package Bike;

import Vehicle.Vehicle;

public class Bike extends Vehicle {

    private String handle;
    public String getHandle() {
        return handle;
    }

    public void setHandle(String handle) {
        this.handle = handle;
    }

    // // Default Constructor
    public Bike() {

    }

    public Bike(String handle, int wheels, int seats, String fuelTank, int light) {
        super(wheels, seats, fuelTank,light);
        this.handle = handle;
    }

    // Overriding the start method
    public void start() {
        System.out.println("BOOM BOOM!");
    }


}
