package Code.Java.DiGui;

public class a1_2_Test {
    public static void main(String[] args) {
        System.out.println("START>>");
        try{
            @SuppressWarnings("unused")
            int[] arr = null;
            // System.out.println(arr[10]); // 捕获空指针异常
            // System.out.println(10/0); // 捕获除数为0异常
        } catch (ArithmeticException e) { // 捕获运算异常
            System.out.println("捕获运算异常");
        } catch (NullPointerException e) { // 捕获空指针异常
            System.out.println("捕获空指针异常");
        }
        System.out.println("END>>");
    }
}
