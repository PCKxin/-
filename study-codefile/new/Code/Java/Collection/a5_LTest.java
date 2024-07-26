package Code.Java.Collection;

import java.util.ArrayList;
import java.util.List;


public class a5_LTest {
    // list接口: 存取有序 有索引 允许存储重复数据

    public static void main(String[] args) {
        // 创建list接口对象--多态
        List<String> list = new ArrayList<>();
        list.add("哈哈");
        list.add("嘻嘻");
        list.add("嘿嘿");

        // 在指定位置添加元素
        list.add(0, "哈喽");

        System.out.println(list);
    }
}
