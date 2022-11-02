import java.util.HashMap;

public class HashMapClass {
    public static void main(String[] args) {

        // HashMap <Key, Value> variableName = new HashMap();
        HashMap<String, String> student = new HashMap<>();

        student.put("name", "Daniel");
        student.put("college", "CICCC");
        student.put("city", "Vancouver");

        System.out.println(student);

        System.out.println("Student Name: " + student.get("name"));
        System.out.println("Student College : " + student.get("college"));
        System.out.println("Student City: " + student.get("city"));

        // Hashmaps are also Iterable in nature

        // Remove Key
 
        // Remove means deleting the given key value pair
        // student.remove("city");


        // System.out.println(student);


        // Clear means deleting all the key value pairs!
        // student.clear();
        // System.out.println(student);


        // Printing Key everytime
        for (String key : student.keySet()) {
            System.out.println(key);
        }

        // Printing Values everytime
        for (String value : student.values()) {
            System.out.println(value);
        }


        for (String key  : student.keySet()) {
            System.out.println("key: " + key + " value: " + student.get(key));
          }

    }
}
