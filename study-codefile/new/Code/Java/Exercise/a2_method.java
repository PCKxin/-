package Code.Java.Exercise;

public class a2_method {
    // static 静态  修饰符
    // void 无返回值
    // main 主方法
    // String[] 形参是String类型的数组
    public static void main(String[] args) {
        // 计算1-n的和
        getSum(5);
        int sum = getSum(5);
        System.out.println(sum);

        // 判断一个整数是奇数还是偶数
        pd(21);

        // 最大值 最小值
        int[] arr = {11,22,33,44,55,66,77,88,99};
        getMax(arr);
    }
    private static void getMax(int[] arr) {
        int max = arr[0];
        // 遍历数组元素
        for (int i = 0; i < arr.length; i++) {
            // 判断当前元素是否大于max
            if(max < arr[i]) {
                max = arr[i];
            }
        }
        System.out.println("最大值是"+max);
    }


    public static int getSum(int n) {
        int sum = 0; // 用来承载和
        // 遍历 1-n之间的所有数
        for (int i = 1; i <= n; i++) {
            sum+=i;
        };
        return sum;
    };

    // 需要参数吗
    // 需要返回值吗 不需要 -- void
    public static void pd(int number){
        // 判断是奇数还是偶数
        if(number%2==0){
            System.out.println(number+"是偶数");
        }else{
            System.out.println(number+"是奇数");
        }
    }
}
