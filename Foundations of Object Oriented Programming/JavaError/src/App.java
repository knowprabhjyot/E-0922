import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        
        // This is the instance of a scanner class
        // through which you can take inputs
        Scanner sc = new Scanner(System.in);

        // System.out.print("Enter an integer : ");

        // I am asking the user for an integer input 
        // and lets see what the user enters
        // int userInput = sc.nextInt();

        // System.out.println("You entered " + userInput);

        // java.util.InputMismatchException
        // If user enteres any value as input which is not an integer will throw this error exception


        // ERROR STACK TRACE

        // Exception in thread "main" java.util.InputMismatchException
        // at java.base/java.util.Scanner.throwFor(Scanner.java:939)
        // at java.base/java.util.Scanner.next(Scanner.java:1594)
        // at java.base/java.util.Scanner.nextInt(Scanner.java:2258)
        // at java.base/java.util.Scanner.nextInt(Scanner.java:2212)
        // at App.main(App.java:14)



        // There are multiple types of data structures
            // Array
            // Objects
            // Stack
            // Queue


        // STACK 
        // A stack is a datastructure which behaves on the concept of FILO (First in Last Out)
        // LIFO (Last in first out)

        // QUEUE
        // / A queue is a datastructure which behaves on the concept of FIFO (First in First Out)
        // LILO (Last in Last out)

        // BOOK SHELL

            // == (LAST ITEM WHICH WAS KEPT IN BOOKSHELL)
          // ======
        // ========== (FIRST ITEM WHICH WAS KEPT IN THE BOOKSHELL)


        // In Javascript you can make a stack by yourself


        // Most common Error you might get in the industry is Null Pointer Exception


        int numArray [] = {1, 2, 3, 4, 5};

        // This will give the reference/address where the array is
        System.out.println(numArray[3]);


        // Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 20 out of bounds for length 5
        // at App.main(App.java:66)
        System.out.println(numArray[20]);


        // This was not reachable (FLOW OF THE PROGRAM GOT BROKE)
        System.out.println("Will I be printed");

    }
}
