package Code.Java.Exercise;

import java.util.Random;

public class a3_captcha {
    // 构造器
    private a3_captcha() {} // 私有构造器 作用是不让外部实例化

    public static String createString(int n) {
        String str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        String code = "";
        // 随机对象
        Random r = new Random();
        for (int i = 0; i < n; i++) {
            int index = r.nextInt(str.length());
            code += str.charAt(index);
        }
        return code;
    }
}
