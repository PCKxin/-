package Code.Java.JiCheng;

import java.time.LocalDateTime;

public class a21_GetTime {
    public static void main(String[] args) {
        // 1. 获取当前时间
        LocalDateTime now = LocalDateTime.now();
        System.out.println("当前时间"+now);

        // 2-获取年份
        System.out.println(now.getYear());

        // 3-获取月份
        System.out.println(now.getMonth());// 枚举
        System.out.println(now.getMonthValue());

        // 4-获取日期
        System.out.println(now.getDayOfMonth());

        // 5-获取星期几
        System.out.println(now.getDayOfWeek());// 枚举
        System.out.println("今天是星期几"+now.getDayOfWeek().getValue());

        // 6-时
        System.out.println(now.getHour());
        // 7-分
        System.out.println(now.getMinute());
        // 8-秒
        System.out.println(now.getSecond());

        // 9-纳秒
        System.out.println(now.getNano());

        // 10-一年的第几天
        System.out.println(now.getDayOfYear() );
    }
}
