package Code.Java.JiCheng;

import java.time.ZoneId; // 获取本地时区类 
import java.time.ZonedDateTime; // 获取指定时区时间类

public class a24_Zone {
    public static void main(String[] args) {
        // 获取当前时间
        ZonedDateTime now = ZonedDateTime.now();
        System.out.println(now);

        // 获取指定时区时间
        ZonedDateTime of = ZonedDateTime.of(2008, 8, 8, 8, 8, 8, 8, ZoneId.of("Asia/Shanghai"));
        System.out.println(of);

        // 修改时区信息
        ZonedDateTime withZoneSameInstant = now.withZoneSameInstant(ZoneId.of("Asia/Shanghai"));
        System.out.println(withZoneSameInstant);

        // 增加时区信息
        ZonedDateTime plusHours = now.plusHours(8);
        System.out.println(plusHours);

        // 减少时区信息
        ZonedDateTime minusHours = now.minusHours(8);
        System.out.println(minusHours);
    }
}
