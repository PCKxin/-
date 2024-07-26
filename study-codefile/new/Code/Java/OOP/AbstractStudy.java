package Code.Java.OOP;

public abstract class AbstractStudy {
    /*
    抽象关键字：abstract
    抽象的意思是：不完整的，未完成的, 通俗来讲就是没有具体实现的方法
    抽象类：包含 抽象方法 的类 必须被声明为 抽象类
    抽象类里面两种方法都可以有也都可以没有，但是抽象方法必须在抽象类里面
    抽象类不能被实例化，只能被继承
    抽象类的 子类 必须实现 抽象类 中的 所有抽象方法，除非子类也是抽象类
    */ 

    // 普通方法
    public void fn1() {
        System.out.println("一级抽象父类的普通方法");
    }
    // 抽象方法, 没有方法体, 不能有方法体和{}
    // 作用是定义了一个方法的名字和参数, 具体实现由子类去实现
    public abstract void fn_abstract();
}
