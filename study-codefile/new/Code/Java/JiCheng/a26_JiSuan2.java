package Code.Java.JiCheng;

import java.time.Duration; // 获取时间间隔类, 和 Period 不同的是, Duration 用于计算两个时间点之间的差值, Period 用于计算两个时间段之间的差值
import java.time.LocalTime;

public class a26_JiSuan2 {
    /*计算两个对象之间相隔的天数，小时数，分数，秒数，纳秒数*/
    public static void main(String[] args) {
        // 1. 准备两个时间
        // 获取当前时间
        LocalTime now = LocalTime.now();
        System.out.println("获取当前时间"+now);

        // 获取指定时间
        LocalTime of = LocalTime.of(8, 8, 8);
        System.out.println("获取指定时间"+of);

        // 2. 计算两个时间的间隔
        Duration between = Duration.between(now, of);
        System.out.println(between.toDays());// 间隔的天数
        System.out.println(between.toHours());// 间隔的小时数
        System.out.println(between.toMinutes());// 间隔的分钟数
        System.out.println(between.toSeconds());// 间隔的秒数
        System.out.println(between.toMillis());// 间隔的纳秒数
    }
}
