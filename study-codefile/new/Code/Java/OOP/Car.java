package Code.Java.OOP;

public class Car {
    String brand;
    String model;
    String color;
    double price;

    // public 后跟的 void 是返回值类型, start是方法名
    // void 方法不能返回值 但是可以有参数
    // String 方法返回值 参数有只能是String类型
    public void start() {
        System.out.println("Car is starting...");
    }

    // void 方法不能返回值
    public void setPrice(double price) {
        this.price = price;
        // return price; 
    }
    // double 方法返回值 假如price是String类型, 就应该用public String getPrice()
    public double getPrice() {
        return price;
    }

    public void play(){
        System.out.println("Car is playing music...");
    }

    public void CarMsg() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
        System.out.println("Price: " + price);
    }
}
