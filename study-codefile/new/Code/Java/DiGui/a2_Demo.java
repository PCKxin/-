package Code.Java.DiGui;

public class a2_Demo {
    /*使用递归计算5的阶乘*/
    public static void main(String[] args) {
        System.out.println(get(5)); // 5 * 4 * 3 * 2 * 1 = 120
        System.out.println(getA(3)); // 3 + 2 + 1 = 6
    }
    public static int get(int num){
        // 如果num == 1 就终止方法

        if(num == 1){
            return 1;
        }else{
            return num * get(num-1);
        }
    }

    public static int getA(int num){
        if(num == 1){
            return 1;
        }else{
            return num + getA(num-1);
        }
    }
}
