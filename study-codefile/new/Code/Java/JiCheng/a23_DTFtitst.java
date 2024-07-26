package Code.Java.JiCheng;

import java.time.LocalDateTime;

public class a23_DTFtitst {
    public static void main(String[] args) {
        // 格式化时间

        // 1. 准备时间--当前时间
        LocalDateTime now = LocalDateTime.now();
        System.out.println("当前时间"+now);

        // 2. 格式化时间
        String format = now.format(java.time.format.DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        System.out.println("格式化时间"+format);

        // 3. 解析时间
        LocalDateTime parse = LocalDateTime.parse(format, java.time.format.DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        System.out.println("解析时间"+parse);


    }
}
