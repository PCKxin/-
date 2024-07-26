package Code.Java.JiCheng;

import java.lang.module.ModuleDescriptor; // 引入 ModuleDescriptor 类 作用是获取模块信息
import java.lang.module.ModuleDescriptor.Version;
import java.text.SimpleDateFormat; // 引入 SimpleDateFormat 类 作用是将字符串时间解析成日期对象
import java.util.Date;
// import java.util.SimpleTimeZone; // 引入 SimpleTimeZone 类 作用是将字符串时区解析成时区对象

public class a18_TimeAPI {
    // 将字符串时间解析成日期对象
    public static void main(String[] args) {
        // 1. 准备字符串时间对象
        @SuppressWarnings("unused")
        String date = "2006-12-03 12:23:00";
        // 2. 准备格式化对象
        // 对象里都格式必须要和字符串时间格式保持一致
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyy-MM-dd HH:mm:ss");
        // simpleDateFormat.format(date);

        // 3-将字符串日期解析为日期时间对象
        String str = "2003-02-12";
        new SimpleDateFormat("yyy-MM-dd");
        // ModuleDescriptor.Version format = null; // 格式化对象
        ModuleDescriptor.Version parse = Version.parse(str); // 解析对象
        System.out.println(parse);
            
        // 4. 将日期时间对象转化为字符串
        Date date1 = new Date();
        String format1 = simpleDateFormat.format(date1);
        System.out.println(format1);
        
    }
}
