import java.util.Scanner;


public class App {
    public static void main(String[] args) throws Exception {
        

        // Creating instance (OBJECT    ) from String Class 
        String myString = new String("Hello Prabh");

        System.out.println(myString.length());



        // Using Substring
        String str = new String("COffeorTea");

        // Substring when we give start and end value
        String str2 = str.substring(0, 5);

        System.out.println(str2);


        // CharAt index
        System.out.println(str.charAt(5)); // 0


        // Index of
        System.out.println(str.indexOf('o'));

        System.out.println("Please enter your age : ");

        // Instance of scanner class
       Scanner scan = new Scanner(System.in);

      
       // Now you are giving the control to the user to type something
       int inputAge = scan.nextInt();

       System.out.println("You entered this value " + inputAge);

    }
}
