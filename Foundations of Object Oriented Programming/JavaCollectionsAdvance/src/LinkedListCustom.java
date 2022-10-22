public class LinkedListCustom {
    
    Node head;

    static class Node {
        int value;
        Node next;

        public Node(int data) {
            this.value = data;
            next = null;
        }
    }

    public  static LinkedListCustom insert(LinkedListCustom list, int data) {

        // First I am creating a node, why because i only have the value
        Node new_Node = new Node(data);

        if (list.head == null)  {
            list.head = new_Node;
        } else {
            Node current =  list.head;
            while(current.next != null) {
                current = current.next;
            }

            current.next = new_Node;
        }

        return list;

    }

    public static  void printList(LinkedListCustom list) {
        Node current = list.head;

        while(current.next != null) {
            System.out.print(current.value + " --> ");
            current = current.next;
        }
    }

    public static  void removeHead(LinkedListCustom list) {
        Node current = list.head;   

        current = current.next;
        
    }


}
