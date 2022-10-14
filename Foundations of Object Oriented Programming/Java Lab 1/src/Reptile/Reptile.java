package Reptile;

import Animal.Animal;

public class Reptile extends Animal {
    private String skinType;
    private String bone;
    private String eggType;


    public String getSkinType() {
        return skinType;
    }

    // Default Constructor
    public Reptile() {
        this.skinType = "Soft";
        this.bone = "Backbone";
        this.eggType = "Soft Shell";
    }

    // Parameterized Constructor
    public Reptile(String skintType, String bone, String eggType,int height, int weight, String animalType, String bloodType  ) {
        
        // We are using super to access parent class fields and update those values when we get them from Reptile Object
        super(height, weight, animalType, bloodType);
        this.skinType = skintType;
        this.bone = bone;
        this.eggType = eggType;

    }

    public void setSkinType(String skinType) {
        this.skinType = skinType;
    }

    public String getBone() {
        return bone;
    }

    public void setBone(String bone) {
        this.bone = bone;
    }

    public String getEggType() {
        return eggType;
    }

    public void setEggType(String eggType) {
        this.eggType = eggType;
    }

}
