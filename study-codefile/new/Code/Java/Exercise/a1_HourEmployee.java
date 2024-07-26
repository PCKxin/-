package Code.Java.Exercise;

/*
3、声明一个子类HourEmployee小时工，继承父类Employee
有属性，工作小时数，每小时多少钱
重写方法，public double earning()返回实发工资， 实发工资 = 每小时多少钱 * 小时数

*/ 

public class a1_HourEmployee extends a1_Employee {
    private double hours;
    private double wage;

    public a1_HourEmployee(String name, double hours, double wage) {
        super(name);
        this.hours = hours;
        this.wage = wage;
    }

    // 获取工作小时数
    public double getHours() {
        return hours;
    }
    // 设置工作小时数
    public void setHours(double hours) {
        this.hours = hours;
    }


    // 获取每小时多少钱
    public double getWage() {
        return wage;
    }
    // 设置每小时多少钱
    public void setWage(double wage) {
        this.wage = wage;
    }

    public double earning() {
        return hours * wage;
    }
}
