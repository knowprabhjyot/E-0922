package StaticDemo;

 class StaticDemo {
    public static void printArg(String str1, String str2) {
        System.out.println("First String arg is: " + str1);
        System.out.println("Second String arg is: " + str2);
    }

    public static void main(String agrs[]) {

        /*
         * This statement can also be written like this:
         * 
         * StaticDemo.printArg("XYZ", "ABC");
         * 
         */

        printArg("XYZ", "ABC");

    }
}
