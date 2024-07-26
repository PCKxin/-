package Code.Java.JiCheng;

public class a3_2_Test {
    // 调用a3_1_Outer的Inner类 -- 外部类.内部类 实例化对象 = new 外部类().new 内部类();
    a3_1_Outer.Inner i = new a3_1_Outer().new Inner();
    public static void main(String[] args) {
        // 调用a3_1_Outer的Inner类 -- 外部类.内部类 实例化对象 = new 外部类().new 内部类();
        a3_1_Outer.Inner i = new a3_1_Outer().new Inner();
        i.test();
        a3_1_Outer.test();
    }
}
