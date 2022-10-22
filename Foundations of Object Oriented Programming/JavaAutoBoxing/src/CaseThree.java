import java.util.ArrayList;

public class CaseThree {
    public static void main(String[] args) {
        ArrayList<Integer> arrayList = new ArrayList<>(0);
        Integer ac = new Integer(4);
        int a = 4;
        int b = 5;
        int c = 10;
        // AUTOBOXING
        arrayList.add(a);
        arrayList.add(b);
        arrayList.add(c);

        System.out.println(arrayList);
    }
}
