package first;

public class GenericClass {
    public static void main(String[] main) {
        FirstClass first = new FirstClass("Joze");

        // Since Name was declared as Protected, we can still access it in same package
        System.out.println("First Class Name : " + first.name);

        // mutations
        first.name = "Prabh";

        first.setName("Daniel");

        System.out.println("First Class Name after Mutation : " + first.name);

    }
}
