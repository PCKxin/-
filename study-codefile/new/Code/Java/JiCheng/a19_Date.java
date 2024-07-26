package Code.Java.JiCheng;

import java.util.Calendar;
import java.util.Date;

public class a19_Date {
    // 日历类
    public static void main(String[] args) {
        // 1-获取当前日历对象
        Calendar instance = Calendar.getInstance();
        System.out.println(instance);

        // 2-获取此刻系统时间
        Date date = instance.getTime();
        System.out.println(date);

        // 3-获取当前时间的毫秒值
        long time = instance.getTimeInMillis();
        System.out.println(time);

        // 4-获取指定字段信息
        int year = instance.get(Calendar.YEAR);
        System.out.println(year);
        int day = instance.get(Calendar.DAY_OF_YEAR);
        System.out.println(day);// 今天是年的那一天

        int month = instance.get(Calendar.MARCH)+1;
        System.out.println(month);

        // 获取年的第几个星期
        int il = instance.get(Calendar.WEEK_OF_YEAR);
        System.out.println(il);

        // 获取星期的第几天 索引从0(星期天)到6(星期六)
        int i = instance.get(Calendar.DAY_OF_WEEK);
        System.out.println(i);

        // 获取月的第几天
        int day1 = instance.get(Calendar.DAY_OF_MONTH);
        System.out.println(day1);

        // 时
        int i1 = instance.get(Calendar.HOUR);
        System.out.println(i1);
        // 分
        int i2 = instance.get(Calendar.MINUTE);
        System.out.println(i2);


        // 秒
        int i3 = instance.get(Calendar.SECOND);
        System.out.println(i3);

        // 修改日期指定字段
        instance.set(Calendar.HOUR,23);
        instance.set(Calendar.YEAR,59);
        instance.set(Calendar.DAY_OF_WEEK,59);

        // 将当前时间改为 20026 12 30

        // instance.set(2006,12,30); 会出错
        instance.set(2006,11,30);
        System.out.println(instance);// HOUR = 23



        // 6-增加减少指定字段
        instance.add(Calendar.YEAR,-100);
        instance.add(Calendar.DAY_OF_YEAR,-100);
        instance.add(Calendar.MONTH,+100);

    }
}
