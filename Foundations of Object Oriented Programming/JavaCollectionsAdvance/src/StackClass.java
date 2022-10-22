import java.util.Stack;

public class StackClass {

    public static void main(String[] args) {
        Stack<Integer> st = new Stack<>();

        st.push(20);
        st.push(30);
        st.push(40);
        st.push(50);

        System.out.println("==============");
        System.out.println(st);

        st.pop();
        System.out.println("==============");
        System.out.println(st);

        System.out.println("==============");
        // st.clear();
        System.out.println(st.empty());

        System.out.println("==============");
        System.out.println(st.peek());

        System.out.println("==============");

        // Searches for the element
        System.out.print(st.search(30));
    }
}
