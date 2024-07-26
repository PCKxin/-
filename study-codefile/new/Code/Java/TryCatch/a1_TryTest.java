package Code.Java.TryCatch;

public class a1_TryTest {
    /*
    看异常信息:从上往下查看
        1-找异常错误所在位置
        2-异常的名称
        3-异常原因
    */

    public static void main(String[] args) {
        // arr();
        // get();
        // get1();
        // 堆内存溢出
        int[] arr = new int[Integer.MAX_VALUE]; // MAX_VALUE = 2147483647
        System.out.println(arr); // OutOfMemoryError
    }

    // 数组索引越界异常
    public static void arr(){
        int[] arr1 = {11,22,33,44,55};
        System.out.println(arr1[4]);
        System.out.println(arr1[5]); // ArrayIndexOutOfBoundsException
    }

    // 发生异常算数条件时抛出
    public static void get(){
        System.out.println(10/0); // ArithmeticException
    }

    // 栈内存溢出
    public static void get1(){
        get1(); // StackOverflowError
    }
}
