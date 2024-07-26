package Code.Java.Exercise;
    /*
    声明一个子类SalaryEmployee正式工，
    继承父类Employee，增加属性，薪资，工作日天数，请假天数
    重写方法，public double earning()返回实发工资，
    实发工资 = 薪资 - 薪资/工作日天数 * 请假天数，
    */ 

public class a1_SalaryEmployee extends a1_Employee {
    private double salary; // 薪资
    private int workDays; // 工作时间
    private int leaveDays; // 请假时间

    public a1_SalaryEmployee(String name, double salary, int workDays, int leaveDays) {
        // super 用于调用父类的构造方法
        super(name); // 调用父类构造方法
        this.salary = salary;
        this.workDays = workDays;
        this.leaveDays = leaveDays;
    }

    // 获取薪资
    public double getSalary() {
        return salary;
    }
    // 设置薪资
    public void setSalary(double salary) {
        this.salary = salary;
    }


    // 获取工作日天数
    public int getWorkDays() {
        return workDays;
    }
    // 设置工作日天数
    public void setWorkDays(int workDays) {
        this.workDays = workDays;
    }


    // 获取请假天数
    public int getLeaveDays() {
        return leaveDays;
    }
    // 设置请假天数
    public void setLeaveDays(int leaveDays) {
        this.leaveDays = leaveDays;
    }


    @Override
    public double earning() {
        // 实发工资 = 薪资 - 薪资/工作日天数 * 请假天数
        return salary - salary / workDays * leaveDays;
    }
}