package collection;

public class EnumClass {
    
    public static void main(String[] args) {
            // public static final int MONDAY = 1;

            // System.out.println(DAYS.SATURDAY);
            DAYS day1 = DAYS.MONDAY;

            switch(day1) {
                case MONDAY: 
                    System.out.println("Mondays are boring");
                    break;
                case TUESDAY:
                System.out.println("Tuesday are okay");
                    break;
                default:
                    System.out.println("I need a holiday");

            }
        }
}


enum DAYS {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}