package Laptop;

import GraphicsCard.GraphicsCard;

public class Laptop {
    
    private String companyName;
    private GraphicsCard graphicsCard;

    private String processor;
    private String screen;

    // Default Constructor
    public Laptop() {
        this.companyName = "Apple";
        this.graphicsCard = new GraphicsCard();
        this.processor = "M1 Chip";
        this.screen = "Emoled";
    }

    // Parameterized Constructor
    public Laptop(String companyName, String graphicsCard, String processor, String screen) {
        this.companyName = companyName;
        this.graphicsCard = new GraphicsCard();
        this.processor = processor;
        this.screen = screen;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getProcessor() {
        return processor;
    }

    public void setProcessor(String processor) {
        this.processor = processor;
    }

    public String getScreen() {
        return screen;
    }

    public void setScreen(String screen) {
        this.screen = screen;
    }

    public GraphicsCard getGraphicsCard() {
        return graphicsCard;
    }

    public void setGraphicsCard(GraphicsCard graphicsCard) {
        this.graphicsCard = graphicsCard;
    }

    public void showInfo() {
        System.out.println("Company Name : " + this.getCompanyName());
        System.out.println(" Graphics Card Company : " + this.getGraphicsCard().getGraphicsCompany());
        System.out.println(" Graphics Card Memory : " + this.getGraphicsCard().getMemory());
        System.out.println(" Graphics Card Duration : " + this.getGraphicsCard().getDuration());
        System.out.println(" Screen : " + this.getScreen());

    }

}
