package Code.Java.JiCheng;

import java.util.Date;

public class a16_TimeAPI {
    // JDK7 时间API
    public static void main(String[] args) {
        // 1. 获取当前时间
        Date date = new Date();
        System.out.println(date);

        // 2. 获取时间的毫秒值
        long time = date.getTime();
        System.out.println(time);

        // 3. 获取的毫秒值，转化为日期时间对象
        time+=2*1000;
        Date date2 = new Date(time);
        System.out.println(date2);

        // 4. 通过setTime 将获取的毫秒值，转化为日期时间对象
        date.setTime(time);
        System.out.println(date);
    }
}
