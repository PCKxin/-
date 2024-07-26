package Code.Java.JiCheng;

public class a10_Stest {
    // 使用StringBuilder 好处
    public static void main(String[] args) {
        // 需求：拼接100 方法abc
        // 用 String 进行拼接
        // String str1 = "";
        // for (int i = 0; i < 10000; i++) {
        //     str1+= "abc";
        // }
        // System.out.println(str1);

        // 用 StringBuilder 拼接 字符速度快
        StringBuilder str2 = new StringBuilder();
        for (int i = 0; i < 10000; i++) {
            str2.append("abc");
        }
        System.out.println(str2);
    }
}
