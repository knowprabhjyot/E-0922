import java.io.FileWriter;
import java.io.IOException;

public class WriteFile {
    public static void main(String [] args) {
        try {
            FileWriter myWriter =  new FileWriter("testFile.txt");
            myWriter.write("This file is test file");
            myWriter.close();
            System.out.println("File Got succsefully created");
        } catch (IOException e) {
            System.out.println("An error occured");
            e.printStackTrace();
        }
    }
}
