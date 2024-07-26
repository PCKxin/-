package Code.Java;

public class StringAPI {
    // String API
    public static void main(String[] args) {
        // 常用
        // 创建有内容的字符串
        String str1 = "创建内容字符串";
        @SuppressWarnings("unused")
        String str2 = new String("创建内容字符串");
        System.out.println(str1); // 创建内容字符串

        // 创建空字符串
        String str3 = "";
        @SuppressWarnings("unused")
        String str4 = new String();
        System.out.println(str3);
        

        // 字符数组的内容, 创建字符串
        char[] chars1 = {'a', 'b', 'c'};
        String str5 = new String(chars1);
        System.out.println(str5); // abc

        // 字节数组的内容, 创建字符串
        byte[] bytes1 = {97, 98, 99};
        String str6 = new String(bytes1);
        System.out.println(str6); // abc , ASCII码会自动转值输出

        // 字符串长度
        System.out.println(str1.length()); // 6

        // 索引值查内容
        System.out.println(str1.charAt(0)); // 创

        // 查找字符在字符串中的位置
        System.out.println(str1.indexOf("创")); // 0

        // 将字符串转换为字符数组返回
        System.out.println(str1.toCharArray());
        for (char c : str1.toCharArray()) {
            System.out.println(c);
        }

        String str7 = "abc";
        String str8 = "ABC";
        // 判断两个字符是否一致(区分大小写)
        System.out.println("s7和s8区分大小写对比:"+ str7.equals(str8)); // false
        // 判断两个字符是否一致(区分大小写)
        System.out.println("s7和s8不区分大小写对比:"+ str7.equalsIgnoreCase(str8)); // true


        // 根据开始和结束索引生成的新字符串(包前不包后) 和切片一样
        System.out.println(str1.substring(0, 2)); // 创建

        // 只有一个参数, 从开始索引到结束
        System.out.println(str1.substring(2)); // 内容字符串

        // 字符串替换
        String stre = "ABC";
        System.out.println(stre.replace("A", "a")); // abc

        // 字符串分割
        // 第二个参数是分割的次数
        String str9 = "a,b,c";
        String[] str10 = str9.split(",");
        for (String s : str10) {
            System.out.println(s);
        }
        String[] str11 = str9.split(",", 2);
        for (String s : str11) {
            System.out.println("字符串分割2" + s);
        }

        // 字符串去空格
        String str12 = "  abc  ";
        System.out.println(str12.trim()); // abc

        // 字符串大小写转换
        System.out.println(str7.toUpperCase()); // ABC
        System.out.println(str8.toLowerCase()); // abc

        // 字符串是否以指定字符串开头
        System.out.println(str1.startsWith("创")); // true
        // 第二个参数指定开始索引
        System.out.println(str1.startsWith("创", 1)); // false
        System.out.println(str1.startsWith("替")); // false

        // 字符串是否以指定字符串结尾
        System.out.println(str1.endsWith("串")); // true
        System.out.println(str1.endsWith("创")); // false

        // 判断字符串是否包含指定字符或字符串
        System.out.println(str1.contains("内容")); // true
        System.out.println(str1.contains("创")); // true
        System.out.println(str1.contains("替")); // false

        // 注意事项
        // String 类是不可变的, 一旦创建, 不能修改
        // 字符串的内容是不可变的, 但是变量是可变的
        String str13 = "abc";
        // String str13 = "def";
        str13 = "def";
        System.out.println(str13); // def

        // 常量池里面的东西是不可变的, 也是共享的
        String str14 = "abc";
        String str15 = "abc";
        System.out.println(str14 == str15); // true

        char[] chars2 = {'a', 'b', 'c'};
        String str16 = new String(chars2);
        String str17 = new String(chars2);
        System.out.println(str16 == str17); // false
        // 不同的原因是, new String() 是在堆内存中显示, 每new一次就会在堆内存中创建一个新的对象, 返回新的堆内存地址
        // 而常量池中的字符串是共享的, 如果常量池中有相同的字符串, 就会返回相同的地址

    }
}
