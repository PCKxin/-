package Code.Java.Collection;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
// import java.util.function.Consumer; // 消费者 作用是把集合中的数据遍历出来

public class a4_CTest {
    public static void main(String[] args) {
        // 创建字符串类型集合对象
        Collection<a0_Student> s = new ArrayList<>();
        s.add(new a0_Student("张三",26));
        s.add(new a0_Student("李四",25));
        s.add(new a0_Student("王五",24));
        s.add(new a0_Student("赵六",23));
        System.out.println(s);

        // 迭代器
        Iterator<a0_Student> it = s.iterator();
        // 判断当前集合时候还有信息(true-false)
        while (it.hasNext()){
            // 获取集合中下一条信息
            // a0_Student student = it.next();
            //建议:next只出现一次  当前写法不建议使用,因为会让迭代器迷茫<不知道去指向哪一个元素
            System.out.println(it.next().getName() + " 同学,今年" + it.next().getAge() + "岁");
        }
        for (a0_Student student : s) {
            System.out.println(student);
        }
        s.forEach(student -> System.out.println(student));
    }
}
