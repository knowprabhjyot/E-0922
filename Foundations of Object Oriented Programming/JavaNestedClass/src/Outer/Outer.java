package Outer;

// Nested Static Class
public class Outer {
    
    public static void testOuterMethod() {
        System.out.println("Value of Inner class Var" + Inner.x);

        Inner.testingInnerMethod();
    }

    // Nested Static Inner Class
    public static class Inner {
        public static int x = 0;
        public static void testingInnerMethod() {
            System.out.println("Testig inner class");
        }
    }
}
