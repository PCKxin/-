package Code.Java.Collection;

import java.util.ArrayList;
import java.util.Collection; // 类作用是表示一组元素的集合，集合中的元素可以重复，集合中的元素可以是不同类型的。

public class a1_CTest {
    // 集合回顾
    public static void main(String[] args) {
        // 创建集合 泛型
        // ArrayList<数据类型> list = new ArrayList<数据类型>();

        // collection接口 通用方法
        // 1. 创建对象 泛型和多态
        Collection<String> c = new ArrayList<>();

        // 2. 添加数据到集合中
        c.add("seec");
        c.add("大牛");
        c.add("工作室");
        System.out.println(c);// [seec, 大牛, 工作室]

        // 3. 判断集合中是否包含指定对象
        System.out.println(c.contains("大牛"));// true
        System.out.println(c.contains("小牛"));//false

        // 4. 集合的长度
        System.out.println(c.size());//3

        // 5. 删除集合中指定内容
        c.remove("大牛");
        System.out.println(c);// [seec, 工作室]

        // 6. 判断当前内容是否为空
        System.out.println(c.isEmpty());// false

        // 7. 清除集合所有内容
        c.clear();
        System.out.println(c);// []
        System.out.println(c.isEmpty());// true
    }
}
