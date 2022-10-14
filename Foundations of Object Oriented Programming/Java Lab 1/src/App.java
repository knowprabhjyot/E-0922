import Animal.Animal;
import Fish.Fish;
import Reptile.Crocodile;
import Reptile.Reptile;
public class App {
    public static void main(String[] args) throws Exception {
       Animal fish = new Animal();


       System.out.println("Fish height before : " + fish.getHeight());

       fish.setHeight(10);

       System.out.println("Fish height after : " + fish.getHeight());

       System.out.println("*****************************");

       Reptile reptile1 = new Reptile("Hard", "Backbone", "SoftShell", 10, 20, "Reptile", "warm");

       System.out.println(reptile1.getBloodType());

       Animal animal1 = new Animal();

       animal1.behaviour();


       Fish nemo = new Fish();

       nemo.behaviour();



       Crocodile croc1 = new Crocodile("Hard", "Backbone", "hardShell", 200, 500, "Reptile", "Warm");

       croc1.showInfo();

    }
}
