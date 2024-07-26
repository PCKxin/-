package Code.Java.OOP;

public class AbstractStudy_son2 extends AbstractStudy_son {
    public static void main(String[] args) {
        // 子类1
        // AbstractStudy_son son = new AbstractStudy_son();
        // son.fn_abstract();
        // 子类2 , 因为上一个子类已经实现了抽象方法，所以这个子类不需要实现抽象方法
        AbstractStudy_son2 son2 = new AbstractStudy_son2();
        son2.fn1(); // 因为子类1继承了一级类的fn1方法，所以子类2也继承了fn1方法
        son2.fn_abstract();
    }
}
