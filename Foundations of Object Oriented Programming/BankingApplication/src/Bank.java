import java.util.Scanner;
import java.util.UUID;

class Bank {
    private final String accountNumber;
    private final String accountHolderName;

    double balance;
    double previousTransaction;

    String accountType;
    String accountStatus;

    public Bank(String accountHolderName, double balance) {
        this.accountNumber = UUID.randomUUID().toString();
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    public String getAccountNumber() {
        return this.accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return this.balance;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getAccountStatus() {
        return accountStatus;
    }

    public void setAccountStatus(String accountStatus) {
        this.accountStatus = accountStatus;
    }

    public double getPreviousTransaction() {
        return previousTransaction;
    }

    public void setPreviousTransaction(double previousTransaction) {
        this.previousTransaction = previousTransaction;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            this.previousTransaction = amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && balance > amount) {
            this.balance -= amount;
            this.previousTransaction = -amount;
        }
    }

    public void showMenu() {
        Scanner sc = new Scanner(System.in);
        char option;
        System.out.println("========= WELCOME TO  XYZ ATM ============");
        System.out.println("Welconme " + this.accountHolderName);
        System.out.println("Account Number : " + this.accountNumber);


        do {
            System.out.println("================================================");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. Previous transaction");
            System.out.println("5. Exit");


            System.out.println("Please enter a choice : ");
            option = sc.next().charAt(0);
            System.out.println(); // Line Break;


            switch(option) {
                case '1' : 
                    System.out.println("================================================");
                    System.out.println(" Your balance is $" + this.balance);
                    System.out.println("================================================");
                    System.out.println(); // Line Break
                    break;

                case '2' : 
                System.out.println("================================================");
                System.out.println(" Enter the amount you want to deposit : ");
                double amount = sc.nextDouble();
                System.out.println("================================================");
                deposit(amount);
                System.out.println(" Accunt Balance Updated : $" + this.balance);
                System.out.println(); // Line Break
                break;

                case '3' : 
                System.out.println("================================================");
                System.out.println(" Enter the amout you want to withdraw : ");
                double amount2 = sc.nextDouble();
                withdraw(amount2);
                System.out.println("$ " + amount2 + " is withdrawn"  +  " remaining Accunt Balance is : $" + this.balance);
                System.out.println("================================================");
                System.out.println(); // break line
                break;

                case '4': 
                System.out.println("================================================");
                System.out.println("Previous Transaction is :  " + this.previousTransaction);
                System.out.println("================================================");
                break;

                case '5' : 
                System.out.println("================================================");
                sc.close();

                break;

                default: 
                    System.out.println("Invalid Option, Please enter a valid input");

            }


        } while(option != '5');
        System.out.println();
        System.out.println("Thankyou for choosing this bank!");

    }

}