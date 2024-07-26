package Code.Java;

import java.util.ArrayList;

public class ArrayListStudy {
    /*
    ArrayList<E>类是一个数组队列，提供了相关的添加、删除、修改、遍历等功能。
    和数组一样，ArrayList是一种容器，可以用来存储其他对象。
    ArrayList中的元素可以是任何对象，包括null。
    ArrayList中的元素是有序的，可以重复的。
    ArrayList允许对元素进行快速随机访问，但是向其中插入和删除元素的速度较慢。
    在默认情况下，ArrayList中的元素没有同步。
    和数组的区别是，数组的长度固定，ArrayList的长度是可变的。
    也就是说，当向ArrayList中添加大量元素时，ArrayList会自动增长，而不会出现“数组索引越界”的情况。
    */ 
    public static void main(String[] args) {
        // 基本应用
        // 创建集合对象
        // <> 泛型，用来限定集合中存储的数据类型, 不加默认为Object
        ArrayList<Object> listO = new ArrayList<>();
        // 字符串类型
        ArrayList<String> list1 = new ArrayList<String>();

        // 添加元素
        listO.add("hello"); // String
        listO.add(1); // int
        listO.add(1.1); // double
        listO.add('a'); // char
        listO.add(true); // boolean
        listO.add(null); // null
        System.out.println(listO);

        list1.add("hello");
        list1.add("world");
        list1.add("java");
        System.out.println(list1);

        // 指定索引位置添加数据
        // 参数
            // index: 索引
            // element: 元素
        list1.add(0, "python");
        System.out.println(list1);

        // 查询集合元素个数
        // 参数
            // 无
        System.out.println(list1.size());

        // 返回指定索引位置的元素
        // 参数
            // index: 索引
        System.out.println(list1.get(0));

        // 删除指定索引处的元素(按索引删除) 返回被删除的元素
        // 参数
            // index: 索引
        System.out.println(list1.remove(0));

        // 修改指定索引处的元素(按索引修改) 返回被修改的元素
        // 参数
            // index: 索引
            // element: 元素
        System.out.println(list1.set(0, "python"));
        System.out.println(list1);

        // 删除指定元素(按元素删除) 返回是否删除成功
        // 删除只会删除第一个, 如果没有找到返回false
        // 参数
            // element: 元素
        System.out.println(list1.remove("python"));
        System.out.println(list1);

        // 删除所有匹配的元素
        // 参数
            // element: 元素
        list1.add("python");
        list1.add("python");
        list1.add("python");
        System.out.println(list1);
        while (list1.remove("python")) {
            System.out.println(list1);
        }

        // 从容器中找出数据并删除
        ArrayList<String> list2 = new ArrayList<String>();
        list2.add("hello");
        list2.add("world");
        list2.add("java");
        list2.add("python");
        list2.add("rust");

        // 遍历集合
        // for循环
        for(int i = list2.size() - 1; i >= 0; i--){
            // contains 判断是否包含, 返回boolean
            System.out.println(list2.get(i).contains("python"));

            // remove 删除指定元素
            String s = list2.get(i);
            if(s.contains("python")){
                list2.remove(i);
            }
            System.out.println(list2);
        }



    }
}
