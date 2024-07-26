package Code.Java;

import java.util.Scanner;

public class ForWhile {
    public static void main(String[] args) {
        // for 循环
        // 两个分号缺一不可
        // 不写循环条件, 默认为true
        System.out.println("for 循环");
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }

        // 增强for循环
        // for(数组类型 变量名 : 数组名){}
        int[] arr2 = {11,22,33,44,55};
        for (int i : arr2){
            System.out.println(i);
        }

        // while 循环
        System.out.println("while 循环");
        int i = 0;
        while (i < 10) {
            System.out.println(i);
            i++;
        }

        // do while 循环
        // 先执行一次再判断
        System.out.println("do while 循环");
        i = 0;
        do {
            System.out.println(i);
            i++;
        } while (i < 10);

        // break
        // 跳出循环
        for (i = 0; i < 10; i++) {
            if (i == 5) {
                break;
            }
            System.out.println(i);
        }

        // continue
        // 跳过本次循环
        for (i = 0; i < 10; i++) {
            if (i == 5) {
                continue;
            }
            System.out.println(i);
        }

        // 嵌套循环
        System.out.println("嵌套循环");
        for (i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                System.out.println(i + " " + j);
            }
        }

        // 九九乘法表
        System.out.println("九九乘法表");
        for (i = 1; i <= 9; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " * " + i + " = " + i * j + " ");
            }
            System.out.println();
        }

        // 三角形
        for (i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5 - i; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // 练习: 使用for打印5-1
        for (i = 5; i > 0; i--) {
            System.out.println(i);
        }
        // 练习: 求1-100的偶数和
        int sum = 0;
        for (i = 1; i <=100; i++){
            if (i % 2 == 0){
                sum += i;
            }
        }
        System.out.println(sum);

        // 练习: 1-100 之间的数 跳过 7 的倍数和个位为 7 的数
        for(i = 1; i <=100; i++){
            if(i % 7 == 0){
                continue;
            }else if(i % 10 == 7){
                continue;
            }else{
                System.out.println(i);
            }
        }
        // 练习: 键盘输入整数, 输入0结束 统计正数负数个数, 输出所有的水仙花数

        // try() 自动关闭资源
        // try(){} catch(){} finally{} 用来处理异常 也可以用来关闭资源

        try (Scanner scanner1 = new Scanner(System.in)) {
            int positive = 0; // 正数
            int negative = 0;
            int count = 0;
            while (true){
                int num = scanner1.nextInt();
                if(num == 0){
                    break;
                }
                if(num > 0){
                    positive++;
                }else{
                    negative++;
                }
                // 水仙花数
                int a = num / 100;
                int b = num / 10 % 10;
                int c = num % 10;
                if(num == a * a * a + b * b * b + c * c * c){
                    System.out.println(num);
                    count++;
                }
            }
            System.out.println("正数: " + positive + " 负数: " + negative);
            System.out.println("水仙花数个数: " + count);
            /* 练习:
             * 从1循环到150并在每行打印一个值
             * 另外在每个3的倍数行上打印出“foo”,在每个5的倍数行上打印“biz”
             * 在每个7的倍数行上打印输出“baz”
             * 格式化输出
             */
            // "\t" 制表符 8个空格 用来格式化对齐输出
            for(i = 1; i <= 150; i++){
                System.out.print(i + "\t");
                if(i % 3 == 0){
                    System.out.print("foo\t");
                }
                if(i % 5 == 0){
                    System.out.print("biz\t");
                }
                if(i % 7 == 0){
                    System.out.print("baz\t");
                }
                System.out.println();
            }
            /*
             * 使用 switch 把阿拉伯数字转为“壹、贰、叁、肆、伍、陆、柒、捌、玖”；
             * 其它的都输出 “other”
             */
            Scanner scanner2 = new Scanner(System.in);
            System.out.println("请输入一个数字: ");
            int num = scanner2.nextInt();
            switch (num){
                case 1:
                    System.out.println("壹");
                    break;
                case 2:
                    System.out.println("贰");
                    break;
                case 3:
                    System.out.println("叁");
                    break;
                case 4:
                    System.out.println("肆");
                    break;
                case 5:
                    System.out.println("伍");
                    break;
                case 6:
                    System.out.println("陆");
                    break;
                case 7:
                    System.out.println("柒");
                    break;
                case 8:
                    System.out.println("捌");
                    break;
                case 9:
                    System.out.println("玖");
                    break;
                default:
                    System.out.println("other");
            }
            
            /* 
            编写一个程序，为一个给定的年份找出其对应的中国生肖。
            中国的生肖基于12年一个周期
            每年用一个动物代表：
            rat（鼠）、ox（牛）、tiger（虎）、rabbit（兔）、dragon（龙）、snake（蛇）、horse（马）、sheep（羊）、monkey（候）、rooster（鸡）、dog（狗）、pig（猪）。
            提示：2017年：鸡 2017 % 12 == 1
            */ 
            Scanner scanner3 = new Scanner(System.in);
            System.out.println("请输入一个年份: ");
            int year = scanner3.nextInt();
            switch (year % 12){
                case 0:
                    System.out.println("猴");
                    break;
                case 1:
                    System.out.println("鸡");
                    break;
                case 2:
                    System.out.println("狗");
                    break;
                case 3:
                    System.out.println("猪");
                    break;
                case 4:
                    System.out.println("鼠");
                    break;
                case 5:
                    System.out.println("牛");
                    break;
                case 6:
                    System.out.println("虎");
                    break;
                case 7:
                    System.out.println("兔");
                    break;
                case 8:
                    System.out.println("龙");
                    break;
                case 9:
                    System.out.println("蛇");
                    break;
                case 10:
                    System.out.println("马");
                    break;
                case 11:
                    System.out.println("羊");
                    break;
            }
            scanner2.close();
            scanner3.close();
        }
    }
    
}
