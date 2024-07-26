package Code.Java.JiCheng;

import java.text.SimpleDateFormat; // 格式化日期时间类
import java.util.Date;

public class a17_TimeAPI {
    // 格式化日期时间
    public static void main(String[] args) {
        // 1-准备日期时间
        Date date = new Date();
        System.out.println(date);

        Long time = date.getTime();
        System.out.println(time);

        // 2-装备格式化对象
        /*
        * y--年
        * M--月
        * d--日
        * H--时(0-23)
        * m--分
        * s--秒
        * E--星期几
        * a--上午下午
        * */
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss EEE a");
        // 3-将日期时间按照指定格式显示
        String format = sdf.format(date);
        System.out.println(format);

        String format1 = sdf.format(time);
        System.out.println(format1);
    }
}
