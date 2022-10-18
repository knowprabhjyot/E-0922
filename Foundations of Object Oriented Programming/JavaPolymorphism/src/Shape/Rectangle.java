package Shape;

public class Rectangle extends Shape {
    private double width;
    private double height;

    public Rectangle(double w, double h) {
        this.height = h;
        this.width = w;
    }
    public double getWidth() {
        return width;
    }

    @Override
    public double getArea() {
        return this.width * this.height;
    }

    public void setWidth(double width) {
        this.width = width;
    }
    public double getHeight() {
        return height;
    }
    public void setHeight(double height) {
        this.height = height;
    }


}
