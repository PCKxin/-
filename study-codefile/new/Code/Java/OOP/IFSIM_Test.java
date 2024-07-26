package Code.Java.OOP;

public class IFSIM_Test {
    /*代码块五大部分：
        成员变量，
        构造器，
            有参构造器
            无参构造器--必须要有
        方法，
            静态方法
            实例方法
        代码块，
        内部类
    */

    // 实例方法
    // 实例方法只能写在class里面，不能写在interface里面
    // 实例方法可以直接访问静态变量和静态方法
    static String nameIFSIM;
    int ageIFSIM;
    public void instanceFn(){
        System.out.println("实例方法测试");
        System.out.println("静态变量:" + nameIFSIM);
        System.out.println("实例变量:" + ageIFSIM);
    };
    
    public static void main(String[] args){
        InterfaceStudy IFS1 = new IFS_Implements();
        IFS1.IFS1_abstractFn();

        InterfaceStudy2 IFS2 = new IFS_Implements();
        IFS2.IFS2_abstractFn();

        IFS_Implements IFSIM = new IFS_Implements();
        IFSIM.IFS1_abstractFn();
        IFSIM.IFS2_abstractFn();
        // 接口中的默认方法可以在实现类中调用, 实现类的意思是实现了接口的类, 和实例方法调用方法一样
        IFSIM.defaultFn();

        // instanceFn(); // 实例方法不能直接调用
        IFSIM_Test IFSIMT = new IFSIM_Test();
        IFSIMT.instanceFn();

    };

    // 代码块
    // 静态代码块 会在类加载时执行，只执行一次, 优先于main和构造方法
    static {
        System.out.println("静态代码块");
    }
}
