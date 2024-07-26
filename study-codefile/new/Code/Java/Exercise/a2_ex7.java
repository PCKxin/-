package Code.Java.Exercise;

/*
 * 判断是否为素数
 * 素数为只能被1和自身整除的数, 例如2, 3, 5, 7, 11, 13, 17, 19, 23, 29
 * 定义flag标记位
 * 遍历2到该数的一半的数据去判断是否有整除的数据，有则改变falg标记位的状态。
 * 最终通过flag的状态判断是否是素数
*/

public class a2_ex7 {
    public static void main(String[] args) {
        int num = 18;
        boolean flag = true;
        for (int i = 2; i <= num / 2; i++) {
            System.out.println("i: "+i);
            System.out.println("num: "+num/2);
            System.out.println("num % i: "+num % i);
            if (num % i == 0) { // 如果num被2整除后余数为0，则不是素数
                flag = false;
                break;
            }
        }
        if (flag) { // flag为true则是素数
            System.out.println(num + "是素数");
        } else {
            System.out.println(num + "不是素数");
        }
    }
}
