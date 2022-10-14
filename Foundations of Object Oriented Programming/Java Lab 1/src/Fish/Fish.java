package Fish;

import Animal.Animal;

public class Fish extends Animal {
    private boolean hasGills;
    private String location;
   
    public boolean isHasGills() {
        return hasGills;
    }

    public void setHasGills(boolean hasGills) {
        this.hasGills = hasGills;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    // Default Constructor
    public Fish() {
        this.hasGills = false;
        this.location = "Ocean";
    }

    @Override
    public void behaviour() {
        System.out.println("THis animal is happy behaviour");
    }

    public Fish(boolean hasGills, String location, int height, int weight, String animalType, String bloodType) {
        super(height, weight, animalType, bloodType);
        this.hasGills = hasGills;
        this.location = location;
    }
    
}
