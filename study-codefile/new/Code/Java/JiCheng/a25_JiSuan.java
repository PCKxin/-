package Code.Java.JiCheng;

import java.time.LocalDate;
import java.time.Period; // 获取时间间隔类

public class a25_JiSuan {
    public static void main(String[] args) {
        // 1. 准备时间
        LocalDate now = LocalDate.now();
        System.out.println("获取当前时间"+now);

        LocalDate of = LocalDate.of(2022, 6, 22);
        System.out.println("获取今年上个月信息"+of);

        Period between = Period.between(of, now); // 第二个参数 减去 第一个参数
        System.out.println(between.getYears());// 间隔的年数
        System.out.println(between.getMonths());// 间隔月数
        System.out.println(between.getDays());// 间隔天数
        System.out.println(between.toTotalMonths());// 间隔的总月份
    }
}
