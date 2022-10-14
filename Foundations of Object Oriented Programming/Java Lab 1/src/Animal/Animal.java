package Animal;

public class Animal {
    private int height; // 0
    private int weight; // 0
    private String animalType; // null
    private String bloodType; // null

    // default Constructor
    public Animal() {
        this.height = 0;
        this.weight = 0;
        this.animalType = "Unkown";
        this.bloodType = "Unknown";
    }

    // Parameterized Constructor
    public Animal(int height, int weight, String animalType, String bloodType ) {
        this.height = height;
        this.weight = weight;
        this.animalType = animalType;
        this.bloodType = bloodType;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getAnimalType() {
        return animalType;
    }

    public void setAnimalType(String animalType) {
        this.animalType = animalType;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public void behaviour() {
        System.out.println("THis animal has angry behaviour");
    }

    // // Getter Function --> it returns the height 
    // public int getHeight() {
    //     return this.height;
    // }


    // // Setter Function --> it changes the height when i call this function
    // public void setHeight(int givenHeight) {
    //     this.height = givenHeight;
    // }

}
