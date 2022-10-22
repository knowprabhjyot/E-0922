import java.util.LinkedList;
import java.util.Queue;

public class QueueClass {
    public static void main(String[] args) {
        Queue<Integer> qu = new LinkedList<>();

        qu.add(5);
        qu.add(6);
        qu.add(7);
        qu.add(8);

        // removes the head of the queue
        qu.remove();

        // Returns the head of the queue
        System.out.println(qu.element());
    }
}
