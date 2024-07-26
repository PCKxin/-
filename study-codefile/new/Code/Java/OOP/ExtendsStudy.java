package Code.Java.OOP;

public class ExtendsStudy extends Car {
    // 继承 extends
    // 被继承的类称为父类(基类，超类)，继承的类称为子类(派生类)
    // 子类继承父类的所有属性和方法，但是不会继承构造方法
    // 继承是单继承，一个类只能继承一个父类
    // 一个类可以有多个子类
    // 子类可以继承父类的非私有属性和方法 私有化的属性和方法不能被继承
    // 当子类和父类有相同的属性和方法时，默认子类会覆盖父类的属性和方法, 也可以通过super关键字调用父类的属性和方法
    // 子类可以重写父类的方法，也可以重载父类的方法

    /*
     * 方法的重写
     * 1. 子类中的方法和父类中的方法有相同的名称和参数(参数的个数，参数的类型，参数类型的顺序)
     * 2. 两个类之间必须有继承关系
     * 3. 重写的方法不能拥有比父类更严格的访问权限
     * 4. 重写的方法不能拥有比父类更多的异常
    */
    /*
     * 方法的重载
     * 1. 在同一个类中
     * 2. 方法名相同，参数列表(参数的个数，参数的类型，参数类型的顺序) 不同
     * 3. 返回值类型可以相同也可以不同, 也就是与返回值无关
     */


    
    String name = "CarPlay"; // 子类的属性
    double price = 5000; // 子类的属性

    public void show() {
        // 调用子类自己的重名属性
        System.out.println(this.price);
        // 调用父类的属性
        System.out.println(super.price);
    }

    // 重写父类的方法
    public void play(String name) {
        System.out.println(name + "runing");
    }

    // 重载父类的方法
    public void play(){};

}
