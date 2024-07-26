package Code.Java.OOP;

public class AbstractStudy_son extends AbstractStudy {
    public AbstractStudy_son() {
        System.out.println("子类1 构造方法");
    }

    @Override
    public void fn_abstract() {
        System.out.println("子类1实现的父级抽象方法");
    }
}
