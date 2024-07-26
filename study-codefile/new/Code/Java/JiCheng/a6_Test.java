package Code.Java.JiCheng;

public class a6_Test {
    // 匿名内部类一般会作为参数使用
    public static void main(String[] args) {
        // 匿名内部类
        /*Swiming s = new Swiming() {
            @Override
            public void swim() {
                System.out.println("运动员在游泳");
            }
        };
        go(s);*/

        go(new Swiming() {
            @Override
            public void swim() {
                System.out.println("运动员在游泳");
            }
        });
    }
    // 设计一个方法 可以将匿名内部类进行传参
    public static void go(Swiming s) {
        System.out.println("开始------");
        s.swim();
    }
}

// 接口
interface Swiming{
    void swim();
}
