package Code.Java.JiCheng;

// outer -- 外部类
public class a3_1_Outer {
    // Inner -- 内部类
    public class Inner {
        @SuppressWarnings("unused")
        private String name; // 实例变量
        public final static int AGE = 22; // 常量 // final 修饰的变量不能被继承
        public void test() {
            System.out.println("内部类方法");
        }
    }
    public static void test() {
        System.out.println("静态方法");
    }
}
