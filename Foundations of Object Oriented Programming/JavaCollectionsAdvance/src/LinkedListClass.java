public class LinkedListClass {
    public static void main(String[] args) throws Exception {
        LinkedList<Integer> listOfIntegers = new LinkedList<>();

        listOfIntegers.add(10);
        listOfIntegers.add(20);
        listOfIntegers.add(30);
        listOfIntegers.add(40);


        System.out.println(listOfIntegers);
        System.out.println("========================");

        listOfIntegers.add(1, 100);

        System.out.println(listOfIntegers);
        System.out.println("========================");

        listOfIntegers.remove();
        listOfIntegers.remove();

        System.out.println(listOfIntegers);

        System.out.println("========================");
        System.out.println(listOfIntegers.size());

        System.out.println("========================");

        // listOfIntegers.clear();

        System.out.println(listOfIntegers);

        if (listOfIntegers.isEmpty()) {
            System.out.println("List is Empty");
        }

        for (int i = 0; i < listOfIntegers.size(); i++) {
            System.out.println(listOfIntegers.get(i));
        }
    }
}
