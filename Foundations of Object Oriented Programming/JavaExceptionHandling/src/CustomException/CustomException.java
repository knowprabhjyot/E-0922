package CustomException;
public class CustomException  extends Exception {
    private String message;

    public CustomException(String message) {
        this.message = message;
    }

    public String getMessage() {
        return this.message;
    }
    
}
