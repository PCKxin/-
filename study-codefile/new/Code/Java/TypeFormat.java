package Code.Java;

import java.util.Scanner;

public class TypeFormat {
    public static void main(String[] args) {
        // 自动类型转换 从小到大
        byte b = 10; // 1字节
        short s = b; // short 意思是短整型 2字节
        int i = s; // int 意思是整型 4字节
        long l = i; // long 意思是长整型 8字节
        float f = l; // float 意思是单精度浮点型 4字节
        double d = f; // double 意思是双精度浮点型 8字节
        System.out.println(d);
        // 输出字节大小
        System.out.println("byte:" + Byte.SIZE);

        // 强制类型转换 从大到小
        double d1 = 10.0;
        float f1 = (float) d1; // (float) 强制类型转换为float
        long l1 = (long) f1; // (long) 强制类型转换为long
        int i1 = (int) l1;
        short s1 = (short) i1;
        byte b1 = (byte) s1;
        System.out.println(b1);
        // 输出字节大小
        System.out.println("byte:" + Byte.SIZE);

        // 特殊类型转换
        char c = 'A'; // char 意思是字符型 2字节
        int i2 = c; // char 转 int
        System.out.println(i2);

        // 字符串转数字
        String str = "123";
        // Integer.parseInt() 方法用于将字符串参数作为有符号的十进制整数进行解析
        int i3 = Integer.parseInt(str);
        System.out.println("out:" + i3 + "type:" + Integer.TYPE);

        // 数字转字符串
        int i4 = 123;
        String str1 = Integer.toString(i4);
        System.out.println("out:" + str1 +"type:" + str1.getClass().getName());




        // 运算符
        // 算术运算符
        int a = 10;
        int b2 = 20;
        System.out.println("a + b = " + (a + b2));
        System.out.println("a - b = " + (a - b2));
        System.out.println("a * b = " + (a * b2));
        System.out.println("b / a = " + (b2 / a));
        // 取余
        System.out.println("b % a = " + (b2 % a));
        // 自增自减
        System.out.println("a++ = " + (a++));
        System.out.println("b-- = " + (b2--));
        // 关系运算符
        System.out.println("a == b = " + (a == b2));
        System.out.println("a != b = " + (a != b2));
        System.out.println("a > b = " + (a > b2));
        System.out.println("a < b = " + (a < b2));
        System.out.println("b >= a = " + (b2 >= a));
        System.out.println("b <= a = " + (b2 <= a));
        // 赋值运算符
        a += b2;
        System.out.println("a += b = " + a);
        a -= b2;
        System.out.println("a -= b = " + a);
        a *= b2;
        System.out.println("a *= b = " + a);
        a /= b2;
        System.out.println("a /= b = " + a);
        a %= b2;
        System.out.println("a %= b = " + a);
        // 位移运算符 位移运算符是把一个数的二进制位向左或向右移动指定的位数
        System.out.println("a << 2 = " + (a << 2)); // a的二进制是1010，左移2位是101000，转换为十进制是40
        System.out.println("a >> 2 = " + (a >> 2));
        System.out.println("a >>> 2 = " + (a >>> 2)); // 无符号右移运算符，忽略符号位，空位都以0补齐 a的二进制是1010，右移2位是10，转换为十进制是2 
        /*
         * 忽略符号位意思是无论正负数，左边都以0补齐 
         * 现在有一个负数-2，二进制码是 11111111 11111111 11111111 11111110
         * 无符号右移2位是 00111111 11111111 11111111 11111111，转换为十进制是1073741823
         * 有符号右移2位是 11111111 11111111 11111111 11111111，转换为十进制是-1
        */
        // 三元运算符
        int result = a > b2 ? a : b2; // 如果a大于b，返回a，否则返回b
        System.out.println("result = " + result);
        // 逻辑运算符
        System.out.println("a = " + a);
        System.out.println("b = " + b2);
        // 逻辑与
        System.out.println("a > 5 && b > 5 = " + (a > 5 && b2 > 5));
        // 逻辑或
        System.out.println("a > 5 || b > 5 = " + (a > 5 || b2 > 5));
        // 逻辑非
        System.out.println("!(a > 5 && b > 5) = " + !(a > 5 && b2 > 5));    
        // 位运算符
        // 位与 意思是两个二进制数的对应位都为1时，结果为1，否则为0
        System.out.println("a & b = " + (a & b2));
        // 位或 意思是两个二进制数的对应位只要有一个为1时，结果为1，否则为0
        System.out.println("a | b = " + (a | b2));
        // 位异或 意思是两个二进制数的对应位不同时为1时，结果为1，否则为0
        System.out.println("a ^ b = " + (a ^ b2));
        // 位非 意思是二进制数的每一位取反
        System.out.println("~a = " + ~a);

        // 案例: 键盘输入四位数，求各位数之和
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入一个四位数：");
        int num = sc.nextInt();
        int qian = num / 1000;
        int bai = num % 1000 / 100;
        int shi = num % 100 / 10;
        int ge = num % 10;
        int sum = qian + bai + shi + ge;
        System.out.println("各位数之和为：" + sum);
        sc.close();
    }
}
