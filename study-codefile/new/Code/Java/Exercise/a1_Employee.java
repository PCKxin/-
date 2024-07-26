package Code.Java.Exercise;

public abstract class a1_Employee {
    /*
    声明一个父类Employee员工类型，有属性，姓名（String）
    有方法，public abstract double earning() 用于返回实发工资
    public String getInfo()：显示姓名和实发工资
    */ 
    private String name;

    // 抽象方法 用于返回实发工资
    public abstract double earning();

    public String getInfo() {
        return "Name: " + name + ", 实发工资: " + earning();
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    // 构造方法
    public a1_Employee(String name) {
        this.name = name;
    }
}
