package Code.Java.OOP;

public class Emp_service extends Emp{
    private int time;

    public Emp_service(int id, String name, String dname, double salary, int time) {
        super(id, name, dname, salary); // 调用父类的构造方法
        this.time = time; // 初始化子类的属性
    }

    @Override
    public void work() {
        System.out.println("客服的work");
    }

    @Override
    public void show() {
        System.out.println("kefu:"+getId()+" "+getName()+" "+getDname()+" "+getSalary()+" "+getTime());
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }
}
