package Reptile;

public class Crocodile extends Reptile {

    // Default Constructor
    public Crocodile() {

    }

    public Crocodile(String skintType, String bone, String eggType, int height, int weight, String animalType,
            String bloodType) {
        super(skintType, bone, eggType, height, weight, animalType, bloodType);
    }

    public void showInfo() {
        System.out.println("My skin type" + this.getSkinType());
        System.out.println("My bone " + this.getBone());
        System.out.println("My Egg Type" + this.getEggType());
        System.out.println("My Height" + this.getHeight());
        System.out.println("My Weight " + this.getWeight());
        System.out.println("My Type" + this.getAnimalType());
        System.out.println("My Blood" + this.getBloodType());
    }
}
