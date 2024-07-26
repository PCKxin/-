package Code.Java.JiCheng;

public class a2_4_Test02 {
    public static void main(String[] args) {
        // 强制转换问题
        // 学生类
        a2_2_Stu01 s1 = new a2_2_Stu01();
        go(s1);

        // 教师类
        a2_3_Tea01 t1 = new a2_3_Tea01();
        go(t1);
    }

    // 设计一个方法，将父类类型作为一个参数
    public static void go(a2_1_p1 p){
        System.out.println("---------");
        p.run();
        System.out.println("---------");

        // 解决类型转换的异常问题
        if(p instanceof a2_2_Stu01){ // instanceof 判断对象是否是某个类的实例
            a2_2_Stu01 s2 = (a2_2_Stu01)p;
            s2.teach(); // 子类独有
        }else if(p instanceof a2_3_Tea01){
            a2_3_Tea01 t2 = (a2_3_Tea01)p;
            t2.teach();
        }

        System.out.println("---------");

    }
}

