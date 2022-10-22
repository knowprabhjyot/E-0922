import java.util.LinkedList;

public class App {
    public static void main(String[] args) throws Exception {
    
        LinkedListCustom myCustomList = new LinkedListCustom();

        System.out.println(myCustomList);

        LinkedListCustom.insert(myCustomList, 10);
        LinkedListCustom.insert(myCustomList, 30);
        LinkedListCustom.insert(myCustomList, 40);
        LinkedListCustom.insert(myCustomList, 50);
        LinkedListCustom.insert(myCustomList, 60);
        // LinkedListCustom.insert(myCustomList, 0)

        LinkedListCustom.printList(myCustomList);
}


}