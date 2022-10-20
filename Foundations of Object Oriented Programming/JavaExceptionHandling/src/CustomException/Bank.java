package CustomException;

public class Bank {
    public static void main(String[] args) {
        CheckingAccount myAccount = new CheckingAccount("Prabh");
        System.out.println(myAccount.getBalance()); 
        System.out.println(myAccount.getNameOfAccountHolder()); 

        try {
            myAccount.deposit(100);
            System.out.println("My Account Balance" + myAccount.getBalance()); 
            myAccount.deposit(-100);
        } catch (CustomException e) {
            // This is the error, where i am accessing getMessage getter function
            System.out.println(e.getMessage());
        } finally {
            System.out.println("We are here in the final block");
        } 

        System.out.println("Program Ends");
        
    }
}
