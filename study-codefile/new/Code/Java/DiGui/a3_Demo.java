package Code.Java.DiGui;

public class a3_Demo {
    /*使用递归求1~n的和*/
    public static void main(String[] args) {
        System.out.println(getSum(100));
    }
    public static int getSum(int num){
        if(num == 1){
            return 1;
        }else{
            return num += getSum(num-1);
        }
    }
}
