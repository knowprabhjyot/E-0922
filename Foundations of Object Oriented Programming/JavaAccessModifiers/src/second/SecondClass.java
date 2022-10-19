package second;

import first.FirstClass;

public class SecondClass extends FirstClass {
    
    public SecondClass(String name) {
        super(name);
        System.out.println("Second Class name : " + this.getName());
    }
}
