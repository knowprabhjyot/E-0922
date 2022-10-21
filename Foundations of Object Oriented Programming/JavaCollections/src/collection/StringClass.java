package collection;

public class StringClass {
    public static void main(String[] args) {

        String x = "Eat";

        String y = "veggies";

        String z = x.concat(y);

        System.out.println(z);

        if (z.equals("Eatveggies")) {

            System.out.println("Text is Eatveggies");

        } else {

            System.out.println("Text is not Eatveggies");

        }


        String str1 = "hello";
        String str2 = new String("hello");

        System.out.println(str1.equals(str2));
        System.out.println(str1== str2) ; // Because for double equals to reference is also checked which is different for both
        
    }
}
