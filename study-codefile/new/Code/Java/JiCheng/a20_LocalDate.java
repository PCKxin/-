package Code.Java.JiCheng;

import java.time.LocalDate; // 获取本地日期类
import java.time.LocalDateTime; 
import java.time.LocalTime;

// 以上引入的三个类区别是:
// LocalDate：年月日
// LocalTime：时分秒
// LocalDateTime：年月日时分秒
// 和普通Date类的区别是:
    // Date类是java.util包下的类
    // LocalDate、LocalTime、LocalDateTime是java.time包下的类
    // LocalDate、LocalTime、LocalDateTime可以进行加减计算

public class a20_LocalDate {
    /*
    * LocalDate：年月日星期
    * LocalTime：时分秒纳秒
    * LocalDateTime：年月日星期时分秒纳秒
    *
    * 获取对象
    *   1-获取此刻时间
    *       now
    *   2-获取指定时间
    *       of
    * */
    public static void main(String[] args) {
        // 1. 获取策克时间对象
        LocalDate now = LocalDate.now();
        System.out.println(now);

        LocalDate date = LocalDate.now();
        System.out.println(date); // 年月日

        LocalTime now1 = LocalTime.now();
        System.out.println(now1);// 时分秒

        // 2. 指定时间对象
        LocalDateTime of = LocalDateTime.of(2008, 8, 8, 8, 8, 8);
        System.out.println("指定时间"+of);

        LocalTime localTime = LocalTime.of(8, 8, 8);
        System.out.println(localTime);

        LocalDate of2 = LocalDate.of(2008, 8, 8);
        System.out.println(of2);

    }
}
