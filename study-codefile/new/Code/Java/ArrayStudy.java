package Code.Java;

import java.util.Arrays;
import java.util.Scanner;

public class ArrayStudy {
    public static void main(String[] args) {

        // 容器: 将多个数据存在一起,每个数据都是容器的元素

        // 定义数组
        // 1. 静态初始化 数据类型[] 数组名 = new 数据类型[]{元素1,元素...}
        int[] arr1 = new int[]{1, 2, 3, 4, 5};
        // 2. 动态初始化 数据类型[] 数组名 = new int[数组长度]
        int[] arr2 = new int[5]; // 定义一个长度为5的数组
        arr2[0] = 1;
        arr2[1] = 2;
        arr2[2] = 3;
        arr2[3] = 4;
        arr2[4] = 5;
        
        // 遍历数组
        for (int i = 0; i < arr1.length; i++) {
            System.out.println(arr1[i]);
        }


        // 数组的长度
        System.out.println(arr1.length);

        // String数组
        String[] arr3 = new String[]{"hello", "world"};
        for (int i = 0; i < arr3.length; i++) {
            System.out.println(arr3[i]);
        }

        String[] arr4 = new String[2];
        arr4[0] = "hello";
        arr4[1] = "world";
        for (int i = 0; i < arr4.length; i++) {
            System.out.println(arr4[i]);
        }
        String s = arr4[0];
        System.out.println(s.length());


        // 二维数组
        int[][] arr5 = new int[][]{{1, 2, 3}, {4, 5, 6}}; // 2行3列
        System.out.println(arr5[0][0]);
        arr5[1][0] = 100;
        System.out.println(arr5[1][0]);

        int[][] arr6 = new int[2][3]; // 2行3列
        arr6[0][0] = 1;
        arr6[0][1] = 2;
        arr6[0][2] = 3;
        arr6[1][0] = 4;
        arr6[1][1] = 5;
        arr6[1][2] = 6;
        for (int i = 0; i < arr6.length; i++) {
            System.out.println("第" + (i + 1) + "行");
            for (int j = 0; j < arr6[i].length; j++) {
                System.out.println(arr6[i][j]);
            }
        }

        // 数组的拷贝(浅拷贝) 两个数组指向同一个地址 一个数组改变另一个数组也会改变
        System.out.println("数组的拷贝(浅拷贝)");
        int[] arr7 = new int[]{1, 2, 3, 4, 5};
        int[] arr8 = new int[arr7.length];
        for (int i = 0; i < arr7.length; i++) {
            arr8[i] = arr7[i];
        }
        arr8[0] = 100;
        System.out.println(arr7[0]);
        // 内存地址
        System.out.println(arr7);
        System.out.println(arr8);
        
        // 数组的拷贝(深拷贝) 两个数组指向不同的地址 两个数组互不影响
        System.out.println("数组的拷贝(深拷贝)");
        int[] arr9 = new int[]{1, 2, 3, 4, 5};
        int[] arr10 = new int[arr9.length];
        System.arraycopy(arr9, 0, arr10, 0, arr9.length);
        arr10[0] = 100;
        System.out.println(arr9[0]);
        // 内存地址
        System.out.println(arr9);
        System.out.println(arr10);

        // 数组排序(sort)
        System.out.println("数组排序");
        int[] arr11 = new int[]{1, 3, 2, 5, 4};
        // java.util.Arrays.sort(arr11);
        Arrays.sort(arr11);
        for (int i = 0; i < arr11.length; i++) {
            System.out.println(arr11[i]);
        }



        // 练习: 分析以下需求，并用代码实现：
        //（1）在编程竞赛中，有10位评委为参赛的选手打分
        //（2）求选手的最后得分（去掉一个最高分和一个最低分后其余8位评委打分的平均值）
        int[] arr12 = new int[]{5, 4, 6, 8, 9, 0, 1, 2, 7, 3};
        Arrays.sort(arr12);
        int sum = 0;
        for (int i = 1; i < arr12.length - 1; i++) { // length - 1 意思是去掉一个最高分 为什么索引不从0开始? 因为已经排序了 最低分在索引0
            sum += arr12[i];
        }
        System.out.println(sum / (arr12.length - 2));

        //练习: 已知：一年12个月每个月的总天数是：{ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30,31}，从键盘输入年，月，日后，计算这一天是这一年的第几天。考虑闰年
        
        Scanner scanner = new Scanner(System.in);
            System.out.println("请输入年份:");
            int year = scanner.nextInt();
            System.out.println("请输入月份:");
            int month = scanner.nextInt();
            System.out.println("请输入日期:");
            int day = scanner.nextInt();
            int[] arr13 = new int[]{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
            int sum2 = 0;
            for (int i = 0; i < month - 1; i++) {
                sum2 += arr13[i];
            }
            sum2 += day;
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                sum2++;
            }
            System.out.println(sum2);
        

        //练习: 假设张三从1990年1月1日开始执行三天打鱼两天晒网，5天一个周期，风雨无阻，那么李四想要找张三玩，需要从键盘输入年，月，日后，判断这一天张三是在打鱼还是晒网。
        Scanner scanner1 = new Scanner(System.in);
            System.out.println("请输入年份:");
            int year1 = scanner1.nextInt();
            System.out.println("请输入月份:");
            int month1 = scanner1.nextInt();
            System.out.println("请输入日期:");
            int day1 = scanner1.nextInt();
            int sum3 = 0;
            // 判断年份是否是闰年
            for (int i = 1990; i < year1; i++) { 
                if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
                    sum3 += 366;
                } else {
                    sum3 += 365;
                }
            }
            int[] arr14 = new int[]{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
            for (int i = 0; i < month1 - 1; i++) {
                sum3 += arr14[i];
            }
            sum3 += day1;
            if ((sum3 - 1) % 5 < 3) {
                System.out.println("打鱼");
            } else {
                System.out.println("晒网");
            }
        
        


        // 练习: 用一个数组，保存星期一到星期天的7个英语单词，从键盘输入1-7，显示对应的单词
        String[] arr15 = new String[]{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};
        Scanner scanner2 = new Scanner(System.in);
            System.out.println("请输入1-7:");
            int i = scanner2.nextInt();
            System.out.println(arr15[i - 1]);
        
        
        scanner.close();
        scanner1.close();
        scanner2.close();


        // 多个变量指向同一个数组的问题

        int[] arrtest1 = {11,2,22,33,44};
        int[] arrtest2 = arrtest1; // arr1只是当前数组的地址
        for (int a : arrtest2) {
            System.out.println(a);
        }

        arrtest2[2] = 99;

        System.out.println(arrtest1[2]); // 99
        System.out.println(arrtest2[2]); // 99

        int[] arrtest3 = null;
        System.out.println(arrtest3); // null
        
        // System.out.println(arrtest3.length); // 异常: 空指针访问:变量arrtest3在此位置只能为空
    }
}
