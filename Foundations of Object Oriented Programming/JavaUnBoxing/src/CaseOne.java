class CaseOne {
    public static void main(String[] args) {
      Integer iObject = new Integer(10);
      myMethod(iObject);
    }

    public static void myMethod(int a) {
        System.out.println(a * 3);
    }
}