package Code.Java.JiCheng;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class a22_ToTime {
    public static void main(String[] args) {
        // 时间日期转换
        // 获取当前年月日时分秒纳秒
        LocalDateTime now = LocalDateTime.now();
        System.out.println("Datetime: "+now);

        // 转换LocalDate
        LocalDate localDate = now.toLocalDate();
        System.out.println("LocalDate: "+localDate); // 年月日

        // 转换LocalTime
        LocalTime localTime = now.toLocalTime();
        System.out.println("LocalTime: "+localTime); // 时分秒纳秒
    }
}
