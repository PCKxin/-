package Code.Java.JiCheng;

public class a9_Stest {
    /*
    StringBuilder 是一个字符串的构建器，可以方便的进行字符串的拼接操作。
    */ 

    /*StringBuilder的基本应用*/
    public static void main(String[] args) {
        StringBuilder str1 = new StringBuilder(); // 创建了一个空的StringBuilder对象
        StringBuilder str2 = new StringBuilder("seec"); // 创建了一个字符串为seec的StringBuilder对象

        System.out.println(str1);
        System.out.println(str2);

        // 拼接字符串
        str1.append("时间");
        str1.append(2);
        str1.append(2.6);
        str1.append(2.6f); // 2.6f 和 2.6区别是 2.6f 是float类型，2.6 是double类型
        
        System.out.println(str1);

        System.out.println(str1.length()); // 输出字符串的长度

        // 2-链式拼接
        str2.append(2).append("技术部");
        System.out.println(str2);

        // 3-数组的长度
        System.out.println(str2.length());

        // 4- 将StringBuilder转换为String类型
        System.out.println(str2.toString());
    }
}
