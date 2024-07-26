package Code.Java.Exercise;

import java.util.Scanner;
import java.util.Random;


/*
    模拟双色球
     * 业务分析、用户投注一组号码 方法名UserBet()
     * 随机生成一组中奖号码 方法名randomBet()
     * 判断中奖情况 方法名judgeBet()
*/ 

public class a2_ex8 {
    public static void main(String[] args) {
        int[] userBet = UserBet();
        int[] randomBet = RandomBet();
        judgeBet(userBet, randomBet);
    }

    public static int[] UserBet(){
        Scanner sc = new Scanner(System.in);
        int[] userBet = new int[7];
        System.out.println("6位红球从1-33中选择, 1位蓝球从1-16中选择");
        System.out.println("请输入您的号码：");
        for (int i = 0; i < userBet.length; i++) {
            userBet[i] = sc.nextInt();
        }
        sc.close();
        return userBet;
    };

    public static int[] RandomBet(){
        Random r = new Random();
        int[] randomBet = new int[7];
        for (int i = 0; i < randomBet.length; i++) {
            randomBet[i] = r.nextInt(33) + 1;
        }
        return randomBet;
    }

    public static void judgeBet(int[] userBet, int[] randomBet) {
        int count = 0;
        for (int i = 0; i < userBet.length; i++) {
            for (int j = 0; j < randomBet.length; j++) {
                if (userBet[i] == randomBet[j]) {
                    count++;
                }
            }
        }
        System.out.println("中奖号码为：");
        for (int i = 0; i < randomBet.length; i++) {
            System.out.print(randomBet[i] + " ");
        }
        System.out.println();
        System.out.println("您的号码为：");
        for (int i = 0; i < userBet.length; i++) {
            System.out.print(userBet[i] + " ");
        }
        System.out.println();
        System.out.println("中奖号码为：" + count + "个");
    }
}
