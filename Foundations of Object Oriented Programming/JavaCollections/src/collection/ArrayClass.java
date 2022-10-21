package collection;

import java.util.ArrayList;
import java.util.List;

public class ArrayClass {
    public static void main(String[] args) {


        // This is not recommended
        // List list = new ArrayList(50);

        List<String> list1 = new ArrayList<String>(20);
        System.out.println("Size of arraylist: " + list1.size());
        List<String> oldList = new ArrayList<>();

        oldList.add("How");
        oldList.add("are");
        oldList.add("you");
        list1.addAll(oldList);


        System.out.println(list1.get(1));
        // list1.add(0, "World");
        System.out.println("Size of arraylist: " + list1.size());


        System.out.println("ARRAY IS : " + list1);

        // System.out.println(list);
    }
}
