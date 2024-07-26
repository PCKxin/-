package Code.Java.OOP;

public class PigTest {
    public static void main(String[] args) {
        // 向上转型 父类引用指向子类对象
        Pig pig = new PigHelan();
        // pig.eat();

        // 向下转型 意思是将父类引用转换为子类引用 但是要注意类型转换异常
        // 向下转型是强制类型转换，需要使用强制类型转换符
        // PigHelan pigHelan = (PigHelan) pig;
        // pigHelan.eat();
        // 判断是否可以转换
        if (pig instanceof PigHelan) { // instanceof 判断是否是某个类的实例
            PigHelan pigHelan = (PigHelan) pig;
            pigHelan.eat();
        } else {
            System.out.println("无法转换");
        }
    }
}
