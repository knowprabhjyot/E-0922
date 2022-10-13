import Bike.Bike;
import Car.Car;

public class App {
    public static void main(String[] args) throws Exception {

        Bike bike2 = new Bike("Long", 2 , 2 , "10L", 2);

        System.out.println(bike2.getWheels());
        System.out.println(bike2.getHandle());

        bike2.accelerate();
        bike2.accelerate();

        Car audi = new Car(1, 4, true, true, 4, 5, "40L", 8);

        System.out.println(audi.getWheels());

        bike2.start();
        audi.start();
    }

}
