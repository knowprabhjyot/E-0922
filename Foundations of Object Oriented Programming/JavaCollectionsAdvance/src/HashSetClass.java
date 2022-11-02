import java.util.*;

public class HashSetClass {
    public static void main(String[] args) {

        // If you are using HashSets, the order is not maintained
        HashSet<String> cars = new HashSet<String>();

        // If you are using HashSets, the order is not maintained
        LinkedHashSet<String> carSet2 = new LinkedHashSet<String>();

        cars.add("BMW");
        cars.add("Audi");
        cars.add("Ferrari");
        cars.add("BMW");



        carSet2.add("BMW");
        carSet2.add("Audi");
        carSet2.add("Ferrari");
        carSet2.add("BMW");

        System.out.println("HASHSET" + cars);
        System.out.println("LINKEDHASHSET" + carSet2);

        // You can convert a set to an Array
        System.out.println("HASHSET" + cars.toArray());


        // To check if set contains a value
        System.out.println(carSet2.contains("Maserati"));
    }
}


// For Better learning explore this as well/
// https://www.w3schools.com/javang