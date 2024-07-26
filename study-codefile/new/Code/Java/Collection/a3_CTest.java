package Code.Java.Collection;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator; // 迭代器

public class a3_CTest {
    public static void main(String[] args) {
        // 创建字符串类型集合对象
        Collection<String> c = new ArrayList<>();
        c.add("小牛");
        c.add("小杨");
        c.add("小张");
        c.add("小往");
        c.add("小器");
        c.add("小五");
        System.out.println(c);

        //迭代器遍历方法
        dai(c);
        /*增强for循环*/
        for1(c);

        //forEach
        c.forEach(s -> System.out.println(s));
    }
    private static void for1(Collection<String> c) {
        /*for (数据类型 变量名:集合){}    c.for*/
        for(String s: c){
            System.out.println(s);
        }
    }

    private static void dai(Collection<String> c) {
        //迭代器 --遍历
        Iterator<String> it = c.iterator();
        //判断当前集合时候还有信息(true-false)
        while (it.hasNext()){
            //获取集合中下一条信息
            String s = it.next();
            System.out.println(s);
        }

        /*//寻找下一条信息
        System.out.println(it.next());
       //是否有更多信息
        System.out.println(it.hasNext());
        System.out.println(it.next());


        System.out.println(it.hasNext());
        System.out.println(it.next());

        System.out.println(it.hasNext());
        System.out.println(it.next());*/
    }
}
