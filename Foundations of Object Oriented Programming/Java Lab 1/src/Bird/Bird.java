package Bird;

import Animal.Animal;

public class Bird extends Animal {
    private boolean hasFeathers;
    private boolean canFly;



    public Bird() {
        this.canFly = false;
        this.hasFeathers = false;
    }

    public Bird(boolean hasFeathers, boolean canFly, int height, int weight, String animalType, String bloodType) {
        super(height, weight, animalType, bloodType);
        this.canFly = hasFeathers;
        this.hasFeathers = canFly;
    }

    public boolean isHasFeathers() {
        return hasFeathers;
    }

    public void setHasFeathers(boolean hasFeathers) {
        this.hasFeathers = hasFeathers;
    }

    public boolean isCanFly() {
        return canFly;
    }

    public void setCanFly(boolean canFly) {
        this.canFly = canFly;
    }
}
