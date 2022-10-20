class ThrowClass {

    public static void main(String[] args) {
        try {
            // Throw keyword is used to intentionally encounter an error
            throw new NullPointerException("Demo");
        } catch (NullPointerException e) {
            System.out.println("I intentionally encountered the null pointer exception");
        }
    }
}