package Code.Java.JiCheng;

public class a1_People {
    public String name = "父类的变量"; // 前面加public原因是：子类可以访问父类的变量, 不加的话子类无法访问父类的变量
    public void run() {
        System.out.println("这是父类的方法");
    };
}
