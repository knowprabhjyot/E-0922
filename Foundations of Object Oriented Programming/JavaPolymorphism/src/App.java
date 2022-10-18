import Shape.Circle;
import Shape.Rectangle;

public class App {
    public static void main(String[] args) throws Exception {
        Rectangle r1 = new Rectangle(20, 50);
        Circle c1 = new Circle(20);
        double c1Circle = c1.getArea();
        double r1Rectangle =  r1.getArea();
        System.out.println("Area of Rectangle R1 is : " + r1Rectangle);
        System.out.printf("%8.2f", c1Circle);

    }
}
