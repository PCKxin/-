package Code.Java.JiCheng;

import java.util.Objects;

public class a8_Test {
    public static void main(String[] args) {
        String s = "hhh";
        String s1 = null;

        System.out.println(s.equals(s1));// false // 字符串比较
        System.out.println(Objects.equals(s,s1));// false // 对象比较

        // 对象比较和字符串比较 区别是 对象比较是比较地址，字符串比较是比较内容
    }
}
