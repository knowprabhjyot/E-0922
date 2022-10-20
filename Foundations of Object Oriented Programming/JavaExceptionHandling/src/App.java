public class App {
    public static void main(String[] args) throws Exception {
        int numArray [] = {1, 2, 3, 4, 5};


        // Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 20 out of bounds for length 5
        // at App.main(App.java:66)

        try {
            // This piece of code might have an error so i added this in try block
            System.out.println("You are accessing  : " + numArray[19]);

            // So you can be specific with the Exception error by giving the exception name
            // So here specific exception is ArrayIndexOutOfBoundsException
            // or You can just write Exception
        } catch (ArrayIndexOutOfBoundsException e) {
            // Hanlding piece of code
            System.out.println("Oh you are trying to access something that doesn't exist because this is ArrayIndexOutOfBoundsException");
        } catch(NullPointerException e) {
            System.out.println("This is a null pointer Exception");

            // We should always add the last catch block to be a generic Exception, because there maybe a situation where you didn;t.
            // handled as a developer, but you still want the code to work
        } catch (Exception e) {
            System.out.println("This is a generic Exception");
        }
    }
}
