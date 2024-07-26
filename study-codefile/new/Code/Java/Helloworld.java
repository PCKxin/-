package Code.Java;
// Code.Java 意思是 Code 文件夹下的 Java 文件夹下的 Helloworld.java 文件
import java.util.Scanner;

// 公共类 Helloworld 与文件名相同
// 公共类也就是 public修饰的类
public class Helloworld {
    // public 公共修饰符
    public static void main(String[] args) {
        // static 静态方法
        // 静态方法可以直接调用
        // 非静态方法需要实例化对象后调用
        // 静态方法不能调用非静态方法
        // 非静态方法可以调用静态方法
        // void 无返回值
        // main 方法是程序的入口
        // String[] 意思是字符串数组
        // args 是参数 默认是空数组

        System.out.println("Hello World");
        // System.out.println() 是输出函数 
        // System 是系统类
        // out 是输出对象
        // println() 是输出函数

        System.out.print("不换行输出"); // 不换行

        // 数据类型
        // 基本数据类型
        // 整数类型 byte short int long 区别是取值范围不同
        byte num1 = 1; // 取值范围 -128 ~ 127
        short s2 = 2; 
        int num3 = 3;
        long num4 = 4l; // long 类型需要加 l 不加l也可以
        // 浮点类型 float double 区别是精度不同
        float num5 = 5.0f; // float 类型需要加f 不加会报错
        double num6 = 6.0; // 双精度

        // 字符类型 char
        char c = 'a'; // 单引号
        // 字符串类型 String
        String str = "Hello World"; // 双引号
        // 布尔类型 boolean
        boolean flag = true; // true false
        // 引用数据类型
        // 数组
        int[] arr = {1, 2, 3, 4, 5}; // 定义数组
        int[] arr2 = new int[5]; // 定义数组


        System.out.println("byte:" + num1);
        System.out.println("short:" + s2);
        System.out.println("int:" + num3);
        System.out.println("long:" + num4);
        System.out.println("float:" + num5);
        System.out.println("double:" + num6);
        System.out.println("char:" + c);
        System.out.println("String:" + str);
        System.out.println("boolean:" + flag);
        System.out.println("数组:" + arr[0]);
        System.out.println("数组 :" + arr2[0]);

        // \t 制表符 作用是对齐
        // \n 换行符
        System.out.println("t1\tt2\nHello\tWorld");
        
        // Scanner 类 用于获取用户输入
        Scanner scin = new Scanner(System.in);
        System.out.println("请输入一个整数：");
        int num = scin.nextInt(); // nextInt() 获取整数
        System.out.println("输入的整数是：" + num);
        scin.close(); // 关闭输入流

        // 调用非公共类
        Revise.main(args); // main(args) 是 Test 类的静态方法 args 是参数 默认是空数组
    }
}

// 非公共类
class Test {
    public static void main(String[] args) {
        System.out.println(args.length);
        System.out.println("class Test");
    }
}
// 非公共类不能被其他文件调用
// 只有公共类可以被其他文件调用
// 怎么运行非公共类？java Code.Java.Test 会报错
// 需要在 Helloworld 类中调用 Test 类



// 一个文件中可以有多个类，但只能有一个公共类

// 编译：javac Helloworld.java
// 运行：java Code.Java.Helloworld
// 或者：java Code/Java/Helloworld
