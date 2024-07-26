package Code.Java;

import java.util.Scanner;

public class FlowControl {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int c = 30;

        /*
         * if else使用场景为
         * 判断区间范围时
         * switch
         * 有对比的时候使用
        */

        // if-else
        if (a > b) {
            System.out.println("a 大于 b");
        } else {
            System.out.println("b is greater than a");
        }

        // if-else-if
        if (a > b && a > c) {
            System.out.println("a 大于 b 和 c");
        } else if (b > a && b > c) {
            System.out.println("b is greater than a and c");
        } else {
            System.out.println("c is greater than a and b");
        }

        // switch-case
        int day = 3;
        switch (day) {
            case 1:
                System.out.println("Sunday");
                break;
            case 2:
                System.out.println("Monday");
                break;
            case 3:
                System.out.println("Tuesday");
                break;
            case 4:
                System.out.println("Wednesday");
                break;
            case 5:
                System.out.println("Thursday");
                break;
            case 6:
                System.out.println("Friday");
                break;
            case 7:
                System.out.println("Saturday");
                break;
            default:
                System.out.println("Invalid(无效) day");
        }

        // 案例1
        // 键盘输入年份，判断闰年平年
        // 闰年：能被4整除但不能被100整除，或者能被400整除
        Scanner scanner1 = new Scanner(System.in);
        System.out.println("请输入年份：");
        int year = scanner1.nextInt();
        if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            System.out.println(year + "是闰年");
        } else {
            System.out.println(year + "是平年");
        }

        // 案例2
        // 键盘输入三个数，输出最大值
        Scanner scanner2 = new Scanner(System.in);
        System.out.println("请输入第一个数：");
        int num1 = scanner2.nextInt();
        System.out.println("请输入第二个数：");
        int num2 = scanner2.nextInt();
        System.out.println("请输入第三个数：");
        int num3 = scanner2.nextInt();
        int max = num1 > num2 ? num1 : num2; // 求出前两个数的最大值
        max = max > num3 ? max : num3; // 求出前两个数的最大值和第三个数的最大值
        System.out.println("最大值是：" + max);

        // 案例3
        // 键盘输入一个年份和月份，输出这个月有多少天
        // 年份为正整数，月份为1-12
        Scanner scanner3 = new Scanner(System.in);
        System.out.println("请输入年份：");
        int year3 = scanner3.nextInt();
        System.out.println("请输入月份：");
        int month3 = scanner3.nextInt();
        int days = 0;
        switch (month3) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                days = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                days = 30;
                break;
            case 2:
                if((year3 % 4 == 0 && year3 % 100 != 0) || year3 % 400 == 0) {
                    days = 29;
                } else {
                    days = 28;
                }
                break;
            default:
                System.out.println("Invalid month");
        }
        System.out.println(year3 + "年" + month3 + "月有" + days + "天");
        

        // 案例四
        Scanner scanner4 = new Scanner(System.in);
        System.out.println("输入x的值：");
        int x = scanner4.nextInt();
        int y = 0;
        if(x >= 3) {
            y = 2 * x + 1;
        } else if(x > 1 && x < 3) {
            y = 2 * x;
        } else {
            y = 2 * x - 1;
        }
        System.out.println("y的值是：" + y);
        


        scanner1.close();
        scanner2.close();
        scanner3.close();
        scanner4.close();
    }
}
