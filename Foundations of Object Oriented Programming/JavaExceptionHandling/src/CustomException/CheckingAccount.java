package CustomException;
public class CheckingAccount {
    private String nameOfAccountHolder;
    private double balance;

    public CheckingAccount(String nameOfAccountHolder) {
        this.nameOfAccountHolder = nameOfAccountHolder;
        this.balance = 0;
    }

    public void deposit(double amount) throws CustomException {
        if (amount < 0 ) {
            throw new CustomException("You cannot deposit a negative amount");
        }

        this.balance += amount;
    }



    public String getNameOfAccountHolder() {
        return nameOfAccountHolder;
    }

    public void setNameOfAccountHolder(String nameOfAccountHolder) {
        this.nameOfAccountHolder = nameOfAccountHolder;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    
}
