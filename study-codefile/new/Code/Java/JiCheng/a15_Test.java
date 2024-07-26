package Code.Java.JiCheng;

import java.math.BigDecimal; // BigDecimal 类 用于精确运算

public class a15_Test {
    // 解决精度问题(浮点型失真问题)
    public static void main(String[] args) {
        double a = 0.1;
        double b = 0.2;
        double c = a+b;

        System.out.println(c);

        System.out.println("-------------");

        BigDecimal a1 = new BigDecimal(Double.valueOf(0.1));
        // Double.valueOf(参数)：将double类型转换为BigDecimal类型
        BigDecimal a2 = new BigDecimal(Double.valueOf(0.2));
        // 加法
        BigDecimal add = a1.add(a2);
        System.out.println(add);

        // 推荐使用
        BigDecimal b1 = BigDecimal.valueOf(0.1);
        BigDecimal b2 = BigDecimal.valueOf(0.2);
        BigDecimal add1 = b1.add(b2);
        System.out.println(add1);

        // 减法
        BigDecimal subtract = b1.subtract(b2);
        System.out.println(subtract);

        // 乘法
        BigDecimal multiply = b1.multiply(b2);
        System.out.println(multiply);

        // 除法
        BigDecimal divide = b1.divide(b2);
        System.out.println(divide);

        // 设置当前小数有几位
        @SuppressWarnings("unused")
        BigDecimal c1 = BigDecimal.valueOf(0.1);
        @SuppressWarnings("unused")
        BigDecimal c2 = BigDecimal.valueOf(0.3);
        // BigDecimal c3 = c1.divide(c2);
        // System.out.println(c3); // 报错 ----无法保证精确数值

        // BigDecimal divide1 = c1.divide(c2, 2, BigDecimal.ROUND_HALF_UP);
        // divide(参数一, 参数二, 参数三)
            // 参数一：被除数
            // 参数二：除数
            // 参数三：精度
                // ROUND_CEILING：向上取整
                // ROUND_DOWN：向下取整
                // ROUND_HALF_UP：四舍五入
        // System.out.println(divide1);
    }
}
