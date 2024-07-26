package Code.Java.TryCatch;

public class a3_TryTest {
    /*异常的默认处理流程*/
    public static void main(String[] args) {
        System.out.println("------1");

        get();// ArithmeticException(运算异常)

        System.out.println("------2");
    }
    public static void get(){
        System.out.println(10/0);// ArithmeticException(运算异常)
    }
}
