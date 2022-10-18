package GraphicsCard;

public class GraphicsCard {
    private String graphicsCompany;
    private String memory;
    private int duration;

   

    // Default Constructor
    public GraphicsCard() {
        this.graphicsCompany = "Apple";
        this.memory = "2gb";
        this.duration = 5;
    }

    public GraphicsCard(String graphicsCompany, String memory, int duration ) {
        this.graphicsCompany = graphicsCompany;
        this.memory = memory;
        this.duration = duration;
    }

    public String getGraphicsCompany() {
        return graphicsCompany;
    }

    public void setGraphicsCompany(String graphicsCompany) {
        this.graphicsCompany = graphicsCompany;
    }

    public String getMemory() {
        return memory;
    }

    public void setMemory(String memory) {
        this.memory = memory;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }
    
}
