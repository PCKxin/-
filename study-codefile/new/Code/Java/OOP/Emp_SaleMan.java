package Code.Java.OOP;

public class Emp_SaleMan extends Emp{
    //创建子类：销售Emp_SaleMan  属性：学历

    private String edu; //学历

    public Emp_SaleMan(int id, String name, String dname, double salary, String edu) {
        super(id, name, dname, salary);
        this.edu = edu;
    }

    public String getXueli() {
        return edu;
    }

    public void setXueli(String edu) {
        this.edu = edu;
    }


    @Override // @Override 作用是检查被修饰的方法是否是有效的重写方法
    public void work() { // 重写父类的方法
        System.out.println("销售类的work");
    }

    @Override 
    // 如果打算重写一个方法，那么可以使用@Override注解来让编译器帮你检查该方法是否正确的实现了重写。
    public void show() {
        // 调用父类的show()
        // super.show();
        System.out.println("saleMan:"+getId()+" "+getName()+" "+getDname()+" "+getSalary()+" "+getXueli());
    }
    
}
