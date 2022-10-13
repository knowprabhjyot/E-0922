package Car;

import Vehicle.Vehicle;

public class Car extends Vehicle {
    private int steering;
    private int stereo;
    private boolean seatBeltOn;
    private boolean ac;


    // Default Constructor
    public Car() {

    }

    public Car(int steering, int stereo, boolean seatBeltOn, boolean ac, int wheels,  int seats, String fuelTank,int light) {
        super(wheels, seats, fuelTank,light);
        this.steering = steering;
        this.stereo = stereo;
        this.seatBeltOn = seatBeltOn;
        this.ac = ac;
    }

    public int getSteering() {
        return steering;
    }
    public void setSteering(int steering) {
        this.steering = steering;
    }
    public int getStereo() {
        return stereo;
    }
    public void setStereo(int stereo) {
        this.stereo = stereo;
    }
    public boolean isSeatBeltOn() {
        return seatBeltOn;
    }
    public void setSeatBeltOn(boolean seatBeltOn) {
        this.seatBeltOn = seatBeltOn;
    }
    public boolean isAc() {
        return ac;
    }
    public void setAc(boolean ac) {
        this.ac = ac;
    }

    // Overriding the start method
    public void start() {
        System.out.println("ZOOOOOOOOOM");
    }


}
