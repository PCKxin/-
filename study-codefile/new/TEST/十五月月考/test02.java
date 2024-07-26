package TEST.十五月月考;

/*
从键盘分别输入年、月、日,判断这一天是当年的第几天 。
先不考虑非法值输入
判断一年是否是闰年的标准：
    可以被4整除，但不可被100整除
    可以被400整除 
*/ 
import java.util.Scanner;

public class test02 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入年份:");
        int year = sc.nextInt();
        System.out.println("请输入月份:");
        int month = sc.nextInt();
        System.out.println("请输入日期:");
        int day = sc.nextInt();
        int[] normalDay = new int[]{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        int daySum = 0;
        String yearType = "平年";
        for (int i = 0; i < month - 1; i++) {
            daySum += normalDay[i];
        }
        daySum += day;
        if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
            daySum++;
            yearType = "闰年";
        }
        System.out.println("输入年类型: "+yearType +"\n"+"当前天数: "+daySum);
        sc.close();
    }
}
