package Code.Java.OOP;

// 接口: 引入了抽象方法的概念，接口中的所有方法都是抽象的
// 关键字: interface

public interface InterfaceStudy {
    // 接口中的方法默认是public abstract的，可以省略
    public void IFS1_abstractFn(); // 抽象方法

    // 默认方法
    public default void defaultFn(){
        System.out.println("默认方法");
    };

    // 静态方法
    // 静态方法只能访问静态变量和静态方法, 不能直接访问实例变量和实例方法
    // 实例方法可以直接访问静态变量和静态方法
    // 静态方法不能被实现类重写
    // 静态方法不可以出现this(当前对象---静态方法指向类)和super(父类对象)关键字
    public static void staticFn(){
        System.out.println("静态方法");
    };
    
    public static void main(String[] args) {
        // 静态方法可以在同一个类中调用
        staticFn();        
    }


}
