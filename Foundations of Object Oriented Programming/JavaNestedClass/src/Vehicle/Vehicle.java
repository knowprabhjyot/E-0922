package Vehicle;

public class Vehicle {
    private String name;
    private String engine;
    private String fuelTank;

    // Default Constructor
    public Vehicle () {

    }

    // Parameterized Constructor
    public Vehicle(String name, String engine, String fuelTank) {
        this.name = name;
        this.engine = engine;
        this.fuelTank = fuelTank;
    }

    // Nested Class 
    class VehiclePart {
        private String partName;
        private String partPrice;
    

        // Parametrized constructor for VehiclePart
        public VehiclePart(String partName, String partPrice) {
            this.partName = partName;
            this.partPrice = partPrice;
        }

        public String getPartName() {
            return partName;
        }

        public void setPartName(String partName) {
            this.partName = partName;
        }

        public String getPartPrice() {
            return partPrice;
        }

        public void setPartPrice(String partPrice) {
            this.partPrice = partPrice;
        }


    }
    
    public void getVehiclePart() {
        VehiclePart part1 = new VehiclePart("Steering", "$200");
        System.out.println(part1.partName);
        System.out.println(part1.partPrice);
    }
}
