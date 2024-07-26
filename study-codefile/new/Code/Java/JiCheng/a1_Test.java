package Code.Java.JiCheng;

public class a1_Test {
    /*
    * 多态的意思是:
        父类类型 名称 = new 子类构造器;

    
    * 父类--people
    * 子类1---Student
    * 子类2--Teacher
    */ 

    public static void main(String[] args) {
        a1_People a1 = new a1_Student();// 多态情况下：找学生行为
        a1_People a2 = new a1_Teacher();// 多态情况下：找老师的行为

        a1.run();// 编译的时候看左边，运行时看右边
        //a1.test(); // --多态情况下 父类 不能直接找子类独有行为 因为父类没有这个方法

        a2.run();

        System.out.println(a1.name); // 变量--编译看左边，运行也看左边(不参与多态)
        System.out.println(a2.name);

        System.out.println("----------------------");

        //强制类型转换
        a1_Student s2 = (a1_Student)a1; // 这种转换方式是为了让子类强制转换成父类, 这样才能调用父类独有方法
        s2.test(); // s2---学生类强制将父类转换

        // 因为上面学生类已经强制转换过了，下边a1的类型 就发生了改变 不能再强制转换
        // a1_Teacher t2 = (a1_Teacher)a1;
        //t2.test(); // 类型异常

        System.out.println("----------------------");

        // 父类参数 将子类转换成父类 然后调用方法
        a1_Student s1 = new a1_Student();
        go(s1);
    }

    // 父类还可以作为参数体现 这里的p就是父类a1_People
    public static void go(a1_People p){
        System.out.println("----------开始------");
        p.run();
        System.out.println("----------结束-----");
    }
}
