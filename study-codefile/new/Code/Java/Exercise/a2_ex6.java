package Code.Java.Exercise;

/*
一个直播时发起了抢红包活动，
分别有：9、666、188、520、99999五个红包。 
请模拟粉丝来抽奖，按照先来先得，随机抽取，抽完即止
注意：一个红包只能被抽一次，先抽或后抽哪一个红包是随机的, 一个人只能抽一个红包
*/ 
// import java.util.Scanner;
// import java.util.Arrays;
import java.util.Random;

public class a2_ex6 {
    public static void main(String[] args) {
        int arr[] = {9, 666, 188, 520, 99999};
        randomarr1(arr.clone());
        randomarr2(arr.clone());
    }
    // 方案1
    // 每次抽奖都从数组中，随机找出一个金额，如果该金额不是0，就输出该金额，然后用0替换该位置处的金额； 如果该位置就是0，则重复上一步操作！
    public static void randomarr1(int[] arr){
        Random rand = new Random();
        int count = arr.length;
        while (count > 0) {
            int index = rand.nextInt(arr.length);
            if (arr[index] != 0) {
                System.out.println("抽中红包: " + arr[index]);
                arr[index] = 0;  // 将该位置置为0
                count--;  // 计数减一
            }
        }
        System.out.println("红包已全部抽完！");
    };
    // 方案2
    // 遍历数组中的每个位置，每遍历到一个位置，都随机一个索引值出来，让当前位置与该索引位置处的数据进行交换
    public static void randomarr2(int[] arr){
        Random rand = new Random();
        for (int i = 0; i < arr.length; i++) {
            int randomIndex = rand.nextInt(arr.length);  // 生成一个随机索引
            // 交换当前位置和随机索引位置的值
            int temp = arr[i];
            arr[i] = arr[randomIndex];
            arr[randomIndex] = temp;
        }
        // 打印打乱后的红包金额
        for (int value : arr) {
            System.out.println("红包金额: " + value);
        }
        System.out.println("红包已全部抽完！");
    };

}
