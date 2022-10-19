package NonStaticDemo;

public class NonStaticDemo {
    public void display() {
        System.out.println("non-static method");
    }

    public static void main(String agrs[]) {
        NonStaticDemo obj = new NonStaticDemo();
        // /*
        //  * If you try to access it directly like this:
        //  * 
        //  * display() then you will get compilation error
        //  * 
        //  */

        obj.display();
    
       
    }
}
