package Code.Java.DiGui;

public class a5_Demo {
    /*猴子吃桃 一半多一个*/
    public static void main(String[] args) {
        System.out.println(monkey(10));
        System.out.println(monkey(9));
        System.out.println(monkey(1));
    }
    public static int monkey(int num){
        if (num == 10){
            return 1;
        }else {
            return (monkey(num+1)+1)*2;
        }
    }
}
