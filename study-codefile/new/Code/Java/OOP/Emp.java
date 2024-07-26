package Code.Java.OOP;

public class Emp {
    // 私有化属性 通过get set方法访问
    private int id ; // 编号
    private String name; // 名字
    private String dname; // 部门名字
    private double salary; // 工资

    /*
    访问修饰符
    private 私有的 只能在本类中访问 (同类)
    default 默认的 只能在本包中访问 (同类 同包)
    protected 只能在本包和子类中访问 (同类 同包 不同包的子类)
    public 公共的 可以在任何地方访问 (同类 同包 不同包的子类 不同包的其他类)
    */ 

    // 构造函数用来初始化对象
    public Emp(int id, String name, String dname, double salary) {
        // this.id 代表当前对象的id
        // id 代表传入的id
        // 两者不同, 一个是类的属性, 一个是传入的参数
        // 通过this.id = id; 将传入的参数赋值给类的属性
        // 不用this的话, 传入的参数id会被销毁, 无法赋值给类的属性
        this.id = id;
        this.name = name;
        this.dname = dname;
        this.salary = salary;
    }

    public void work(){
        System.out.println("父类的work");
    }
    public void show(){
        System.out.println("父类的show");
    }

    // 获取id方法 int类型
    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDname() {
        return dname;
    }

    public void setDname(String dname) {
        this.dname = dname;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    
}
