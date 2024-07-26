package Code.Java.Collection;

import java.util.ArrayList;
import java.util.Collection;

public class a2_CTest {
    public static void main(String[] args) {
        //创建学生类型集合对象
        Collection<a0_Student> c = new ArrayList<>();

        //添加信息
        c.add(new a0_Student("张婕",23));
        c.add(new a0_Student("张茄",24));
        c.add(new a0_Student("张虎",25));

        
        System.out.println(c);

        //删除指定信息
        // c.remove("张婕"); // 删除不成功:信息不全,找不到要删的内容
        // c.remove(new a0_Student("张婕",23)); // 遇到new  就是对象-产生新的地址,在这里删除的是新地址的内容,跟原内容没关系

        c.remove(new a0_Student("张婕",23));//重写Equals方法:按照内容删除,不找地址
        System.out.println(c);

        System.out.println(c.contains(new a0_Student("张茄", 24)));
    }
}
