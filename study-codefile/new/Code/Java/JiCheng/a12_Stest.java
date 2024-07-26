package Code.Java.JiCheng;

import java.util.StringJoiner;

public class a12_Stest {
    // StringJoiner 的使用方法
    public static void main(String[] args) {
        StringJoiner sj = new StringJoiner(",");
        // 拼接字符串
        sj.add("a").add("2").add("技术部");
        System.out.println(sj);

        /*
        * 括号里：
        *   参数1：分隔符
        *   参数2：开头
        *   参数3：结束
        */
        @SuppressWarnings("unused")
        StringJoiner sj1 = new StringJoiner(",","[","]");
    }
}
