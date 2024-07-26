package Code.Java.Exercise;

public class a3_create {
    // 注册界面
    public static void main(String[] args) {
        // 工具类：将多个类使用的同一个功能，放在一个类里，
        // 供其他类似用，构造器私有，直接 类名.静态方法名
        System.out.println(a3_captcha.createString(5));
    }
}
