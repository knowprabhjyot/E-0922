public class FinallyClass {
    
    public static void main(String[] args) {
        int x = 4;

        try {
            System.out.println("We don't know what the output could be : " + x/2);
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception");
        } catch (Exception e) {
            System.out.println("Inside Exception Block");
        } finally {
            // This piece of code will alwyas execute if there is an exception or not
            System.out.println("This will be printed because this is inside finally block");    
        }

        System.out.println("Program ends");
    }
}
