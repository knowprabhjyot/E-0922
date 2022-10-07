
// Importing Big Decimal Class
import java.math.BigDecimal;

public class App {
    public static void main(String[] args) throws Exception {
       

        // Creating a variable
        int num = 4;

        String name = "Prabh";

        System.out.println(name);


        // This acts like console.log just like Javascript
        System.out.println(num);


        // Multiple variables in one like

        int num1 = 4, num2 = 5;

        System.out.println(num1);
        System.out.println(num2);

        

        // Assign value to another

        int num3 = 6;
        int num4 = num3;

        System.out.println(num3);
        System.out.println(num4);

        char var = '\u00A7';


        System.out.println(var);

        System.out.println("************************");

 
        System.out.println(2.00 - 1.1); // 0.899999999999


        System.out.println(new BigDecimal("2.00").subtract(new BigDecimal("1.1"))); // 0.90


        // String Variable

        String userName = "\u00BB";


        System.out.println(userName);


        // Character in Java
        char letterP = 'P';


        // Concatenation of strings

        String var1 = "Prabh";
        String var2 = "Gambhir";

        System.out.println(var1 + " " + var2);



        // Some inbuilt Methods

        String a = "A";
        String b = "A";

        // Intellisense


        // Java has inbuilt method called as equals to check values
        if (a.equals(b)) {
            System.out.println("Yes they are equal");
        } else {
            System.out.println("No they are not equal");
        }


        // Java has inbuilt method called as equals to check values
        String z = "Hello Prabh how are you Prabh";

        String newValue = z.replace("Prabh", "Tomoki");

        System.out.println(newValue);
        


        // Typecasting

        // Implicit Typecasting - The Compiler will automatically typecast the value for you

        short x = 20; // Short has lesser range and fits inside the integer
        int y = x;


        // Explicit Typecasting - When you intentionally have to typecast a value
        int x1 = 20;
        short x2 = x1;

        // Type mismatch: cannot convert from int to short
        System.out.println(x2);


        // Intentionally typecast it 

        short x3 = (short) x1;

        System.out.println(x3);
    }
}
