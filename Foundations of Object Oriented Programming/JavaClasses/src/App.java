public class App {
    public static void main(String[] args) throws Exception {
    
        // Instance of the class Car
        Car prabhCar = new Car();

        Car audi = new Car("Audi", "R8", "Prabh", 0, 2020, "red");
        Car ferrari = new Car("Ferrari", "XYZ", "Prabh", 0, 2022, "Orange");

        System.out.println(prabhCar.getMake()); // BMW

        System.out.println(prabhCar.getModel()); // 3 Series

        System.out.println(prabhCar.getOwner()); // Prabh

        System.out.println("My speed right now " + prabhCar.getSpeed());

        prabhCar.accelerate(); // +5
        prabhCar.accelerate(); // +5

        prabhCar.brake(); // -5
        prabhCar.brake(); // -5
        prabhCar.brake(); // -5


        System.out.println("My speed after acceleration " + prabhCar.getSpeed());

        // ***************************
        System.out.println(audi.getColor() + " ORIGNAL COLOR");

        audi.changeColor("Matt Black");

        System.out.println(audi.getColor() + " NEW CHANGED COLOR");


        System.out.println(ferrari.getColor() + " ORIGNAL COLOR");


        
    }
}
