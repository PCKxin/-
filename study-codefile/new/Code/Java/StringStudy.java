package Code.Java;

import java.text.ParseException; // 引入异常包, 用来处理异常
import java.text.SimpleDateFormat; // 引入日期格式化包
// import java.util.Calendar; // 引入日历包
import java.util.Date; // 引入日期包 , 和日历包的区别是, 日历包是对日期的操作, 日期包是对日期的表示
import java.util.Random; // 引入随机数包

public class StringStudy {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "HelloS2";
        String s3 = new String("HelloS3");
        String s4 = new String("HelloS4");

        // 获取字符串长度
        System.out.println("字符串s1长度:"+s1.length());

        // 字符串拼接
        System.out.println("字符串拼接(运算符拼接):"+s1+s2);
        System.out.println("字符串拼接(concat)" + s1.concat(s2));

        // 字符串比较
        // == 比较的是地址, 地址是指向的内存地址, 内存地址相同返回true,否则返回false
        // equals比较的是内容, 内容相同返回true,否则返回false

        System.out.println("字符串比较(内容)"+s1.equals(s2));
        System.out.println("字符串比较(内存地址):"+s1 == s2);

        // 字符串查找
        // 获取指定索引下的字符
        System.out.println("获取字符串s1索引0下的字符:"+s1.charAt(0));
        
        // 是否包含某字符串
        System.out.println("是否包含某字符串:"+s3.contains("H"));

        // 查找某字符的第一次出现的位置
        System.out.println("查找字符3的第一次出现的位置:"+s3.indexOf("3"));
        System.out.println("字符串s3长度" + s3.length());

        // 截取字符串
        // substring(beginIndex) 
        // beginIndex:开始的索引 从开始的索引截取到字符串末尾
        // substring(beginIndex, endIndex)
        // 两个参数, 第一个参数是开始的索引, 第二个参数是结束的索引, 从开始的索引截取到结束的索引
        System.out.println("截取字符串:"+s4.substring(0, 5));

        // 字符串替换
        // replace(oldChar, newChar) 将字符串中的oldChar替换为newChar
        System.out.println("字符串替换:"+s4.replace("Hello", "Hi"));

        // 字符串分割
        // split(regex) 将字符串按照regex分割
        String s5 = "Hello,World,Java";
        String[] s5Array = s5.split(",");
        for (String s : s5Array) {
            System.out.println("字符串分割:"+s);
        }

        // 去掉两端空格
        String s6 = "  Hello  ";
        System.out.println("去掉两端空格:"+s6.trim());

        // 创建字符串
        // StringBuffer 线程安全,效率低 意思是有缓冲区的字符串 不产生新的对象
        // StringBuilder 线程不安全,效率高 意思是没有缓冲区的字符串 会产生新的对象
        // 缓冲区的初始值意思是在创建对象的时候,会在内存中开辟一块空间,用来存储字符串
        // 当字符串长度超过缓冲区的长度时,会自动扩容
        // 默认是16个字符
        StringBuffer sb1 = new StringBuffer(6);
        StringBuffer sb2 = new StringBuffer("HelloStringBuffer");
        System.out.println("StringBuffer1 length:"+sb1.length());
        System.out.println("StringBuffer2 length:"+sb2.length());

        // StringBuffer的常用方法
        // append() 追加字符串
        // insert() 插入字符串
        // delete() 删除字符串
        // deleteCharAt() 删除指定位置的字符
        // reverse() 反转字符串
        // replace() 替换字符串
        // substring() 截取字符串

        // 字符串替换
        System.out.println("字符串替换:"+sb2.replace(0, 5, "Hi"));

        // 指定位置插入字符串
        System.out.println("指定位置插入字符串:"+sb2.insert(0, "Hi"));

        // 字符串反转
        System.out.println("字符串反转:"+sb2.reverse());

        // 随机数
        Random random = new Random();
        System.out.println("随机数:"+random.nextInt()); // 生成一个随机数 有正有负
        // 生成一个0-100的随机数
        System.out.println("生成一个0-100的随机数:"+random.nextInt(100)); // 生成一个0-100的随机数 没有小数
        // nextDouble() 生成一个0-1的随机数 有小数
        System.out.println("生成一个0-1的随机数(双精度):"+random.nextDouble()); // 生成一个0-1的随机数 有小数
        // nextFloat() 生成一个0-1的随机数 有小数 和nextDouble() 区别是nextFloat()返回的是单精度浮点数
        System.out.println("生成一个0-1的随机数(单精度):"+random.nextFloat()); // 生成一个0-1的随机数 有小数
        // nextBoolean() 生成一个随机的布尔值
        System.out.println("生成一个随机的布尔值:"+random.nextBoolean());

        // 日期字符串转换
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        // 将日期转换为字符串
        String dateStr = sdf.format(date);
        System.out.println("日期转换为字符串:"+dateStr);
        // 将字符串转换为日期
        try {
            Date date2 = sdf.parse(dateStr);
            System.out.println("字符串转换为日期:"+date2);
        } catch (ParseException e) { // ParseException是一个异常类, 用来处理数字转换异常 e是异常对象
            e.printStackTrace(); // 打印异常信息
        }
        


    }
}
