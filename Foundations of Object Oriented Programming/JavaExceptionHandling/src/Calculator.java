import java.util.InputMismatchException;
import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {

        System.out.println("==============================");
        System.out.println("Type 1 : For Adding");
        System.out.println("Type 2 : For Subtraction");
        System.out.println("Type 3 : For Division");
        System.out.println("==============================");

        Scanner sc = new Scanner(System.in);

        // System.out.println("Please enter First Number : ");
        // int num1Input = sc.nextInt();

        int userChoice = 0;
        int number1 = 1;
        int number2 = 1;

        int output = 0;
        System.out.println("PLease enter a choice : ");

        try {

            userChoice = sc.nextInt(); // Waiting for a user to enter the input

            System.out.println("Please enter First number : ");
            number1 = sc.nextInt();

            System.out.println("Please enter Second number : ");
            number2 = sc.nextInt();

            if (userChoice == 1) {
                output = number1 + number2;
            }

            if (userChoice == 2) {
                output = number1 - number2;
            }

            if (userChoice == 3) {
                output = number1 / number2;
            }

        } catch (InputMismatchException e) {
            System.out.println("Please enter a number which is valid meaning integer");
        } catch (IllegalStateException e) {
            System.out.println("Sorry, scanner is closed now");
        } catch (ArithmeticException e) {
            System.out.println("You cannot divide a number by 0");
        } catch (Exception e) {
            System.out.println("Something Went Wrong Sorry");
        } finally {
            System.out.println("Your final output is : " + output);

            // Closing Scanner Class Instance
            sc.close();
        }

    }
}


// ASSIGNMENT - 
// You have to use the above code which I wrote, or if you want to modify its up to you
// And you have ask the user everytime the operation is completed
// Do you want to use calculator again ? 
// If user says "YES" --> Repeat same process again
// IF user says "NO" --> Thankyou for choosing the calculator, BYE BYE!

// HINT FOR THIS IS you have to use  a while loop and break the loop when the user says NO
// while (true)


// while (true) {
//     if (a == 0) {
//         break;
//     }

//     console.log("Value of a : " + a);
//     a--;
// }
