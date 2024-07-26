package Code.Java.DiGui;

public class a1_1_Test {
    /*递归：直接或者间接调用当前方法*/
    public static void main(String[] args) {
        // method();// 报错
        methodA();// 报错

    }

    // 直接调用 会报错
    public static void method(){
        method();
    }

    // 间接调用
    public static void methodA(){
        methodB();
    }
    public static void methodB(){
        methodC();
    }
    public static void methodC(){
        methodD();
    }
    public static void methodD(){
        methodA();
    }
}
