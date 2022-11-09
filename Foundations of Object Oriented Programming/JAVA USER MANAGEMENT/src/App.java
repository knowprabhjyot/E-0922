import java.util.List;
import java.util.Scanner;

import dto.User;
import service.UserService;
import service.UserServiceIm;

public class App {
    public static void main(String[] args) throws Exception {
        showMenu();
    }

    public static void showMenu() {
        Scanner scanner = new Scanner(System.in);
        UserService userService = new UserServiceIm();

        String userChoice = "";

        do {
            System.out.println("==================================");
            System.out.println("1. Register");
            System.out.println("2. Login");
            System.out.println("3. Get All Users");
            System.out.println("4: Get User By Id");
            System.out.println("5. Delete User");
            System.out.println("6. Update User");
            System.out.println("7. Exit");
            System.out.println("==================================");

            userChoice = scanner.nextLine();

            switch (userChoice) {
                case "1":
                    System.out.println("Enter Your name");
                    String name = scanner.nextLine();
                    System.out.println("Enter Your lastname");
                    String lastname = scanner.nextLine();
                    System.out.println("Enter your email");
                    String email = scanner.nextLine();
                    System.out.println("Enter your password");
                    String password = scanner.nextLine();

                    User user = new User(name, lastname, email, password);
                    userService.insert(user);
                    break;

                case "2":
                    System.out.println("Enter your email");
                    email = scanner.nextLine();
                    System.out.println("Enter your password");
                    password = scanner.nextLine();

                    User user2 = userService.getByEmailAndPassword(email, password);

                    if (user2 != null) {
                        System.out.println("Welcome " + user2.getName() + " " + user2.getLastname());
                    } else {
                        System.out.print("Invalid email or password ");
                    }
                    break;

                case "3":
                    System.out.println("==================================");
                    displayUsers(userService.getAll());
                    System.out.println("==================================");

                    break;
                case "4":
                    System.out.println("==================================");
                    // Its only for telling the users that this is the list, choose a user from the
                    // given list
                    displayUsers(userService.getAll());
                    System.out.println("==================================");

                    System.out.println("Enter user ID : ");
                    // Scanner retursn a string so we have to convert it to an integer in order to
                    // query DB
                    int id = Integer.parseInt(scanner.nextLine());
                    User user3 = userService.getUserById(id);

                    if (user3 != null) {
                        System.out.println("ID\tNAME\tLAST\tPASSWORD\tEMAIL");
                        System.out.println(user3);
                    } else {
                        System.out.println("User was not found!");
                    }

                    break;

                case "5":
                    System.out.println("==================================");
                    displayUsers(userService.getAll());
                    System.out.println("==================================");
                    System.out.println("Enter user ID : ");
                    // Scanner retursn a string so we have to convert it to an integer in order to
                    // query DB
                    id = Integer.parseInt(scanner.nextLine());
                    userService.delete(id);
                    break;

                case "6":
                    System.out.println("==================================");
                    displayUsers(userService.getAll());
                    System.out.println("==================================");

                    System.out.println("Enter user ID : ");
                    id = Integer.parseInt(scanner.nextLine());
                    User user4 = userService.getUserById(id);

                    if (user4 != null) {
                        System.out.println("Enter new user name");
                        String newName = scanner.nextLine();
                        System.out.println("Enter new lastname");
                        String newLastName = scanner.nextLine();
                        System.out.println("Enter new  email");
                        String newEmail = scanner.nextLine();
                        System.out.println("Enter new password");
                        String newPassword = scanner.nextLine();

                        user4.setName(newName);
                        user4.setLastname(newLastName);
                        user4.setEmail(newEmail);
                        user4.setPassword(newPassword);

                        userService.update(user4);
                    } else {
                        System.out.println("User not found!");
                    }
                    break;

                default:
                    System.out.println("Invalid choice");

            }
        } while (!userChoice.equals("7"));
        scanner.close();
    }

    public static void displayUsers(List<User> users) {
        System.out.println("ID\tNAME\tLAST\tPASSWORD\tEMAIL");
        for (User user : users) {
            System.out.print(user.getId() + "\t");
            System.out.print(user.getName() + "\t");
            System.out.print(user.getLastname() + "\t");
            System.out.print(user.getPassword() + "\t");
            System.out.print(user.getEmail() + "\t");
            System.out.println("\n");
        }
    }
}
