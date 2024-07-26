package Code.Java.OOP;

// 接口的实现类: implements
// 接口的特点是: 
    // 1. 接口中的方法都是抽象方法, 不能有方法体
    // 2. 接口中的成员变量都是常量, 默认是 public static final
    // 3. 接口中的方法都是 public 的
    // 4. 接口中的方法不能有方法体
    // 5. 多实现接口时, 用逗号隔开

public class IFS_Implements implements InterfaceStudy, InterfaceStudy2 {
    // 实现接口中的方法
    @Override
    public void IFS1_abstractFn(){
        System.out.println("接口1抽象方法");
    };
    @Override
    public void IFS2_abstractFn(){
        System.out.println("接口2抽象方法");
    };

}
