import java.io.*;

class CreateFile {
    public static void main(String [] args) {
        File file = new File("filename.txt");

        try {
            if (file.createNewFile()) {
             System.out.println(" File created : " + file.getName());
            } else {
                System.out.println("Something went wrong");
            }
        } catch(IOException e) {
            System.out.println("There was an error");
            e.printStackTrace();
        }
    }
}