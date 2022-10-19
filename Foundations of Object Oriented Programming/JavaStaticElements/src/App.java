import Car.Car;

public class App {
    public static void main(String[] args) throws Exception {

        Car ferrari = new Car("Ferrari", "Best Engine");
        Car Buggati = new Car("Buggati", "Another Best Engine");



        System.out.println("Name : " + ferrari.getName());
        System.out.println("Engine : " + ferrari.getEngine());


          // I don't have to create an instant to access the methods which are static
        ThirdPartyDealer.makeCar();

        System.out.println("Number of Cars " + Car.numberOfCars);



    }
}


class ThirdPartyDealer {
    public static void makeCar() {
        System.out.println("This method is accessible at class level");
        // new Car("Lamborghini", "v12");
    }
}