package Code.Java.JiCheng;

public class a14_Stest {
    public static void main(String[] args) {
        // 获取当前系统的毫秒值
        // Long 类型 意思是 64位的 作用于需要精确到毫秒
        Long time1 = System.currentTimeMillis();
        System.out.println(time1);

        // 循环1000000次 作用是消耗时间
        for (int i = 0; i < 1000000; i++){
            System.out.println("输出"+i);
        }

        // 获取当前系统的毫秒值
        Long time2 = System.currentTimeMillis();
        //  /1000是将毫秒转换为秒
        System.out.println((time2-time1)/1000+"s");
    }
}
