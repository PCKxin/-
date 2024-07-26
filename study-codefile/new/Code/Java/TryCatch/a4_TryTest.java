package Code.Java.TryCatch;

public class a4_TryTest {
    /*处理异常 try-catch---后续代码可以继续执行
    *   try{
    *       可能出现异常的代码
    *   }catch(异常名称 变量名){
    *       异常处理方案
    *   }
    * */
    public static void main(String[] args) {
        try01();
        try02();

        try {
            System.out.println(10/0);
        } catch (Exception e) {
            throw new RuntimeException(e); // 把异常抛出
        }
    }

    private static void try01(){
        System.out.println("try01-------1");
        try{
            int[] arr = {11,22,333};
            System.out.println(arr[6]); // 越界访问报错

            System.out.println(10/0);
        } catch (ArithmeticException e){
            System.out.println("捕获了一个算数(运算)异常");
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("捕获了一个索引(数组)越界异常");
        }
        System.out.println("try01-------2");
    }

    private static void try02() {
        System.out.println("try02-------1");
        try{
            int[] arr = {11,22,333};
            System.out.println(arr[6]);

            System.out.println(10/0);

        }catch (Exception e){
            System.out.println("捕获了一个异常");
        }
        System.out.println("try02-------2");
    }
}
