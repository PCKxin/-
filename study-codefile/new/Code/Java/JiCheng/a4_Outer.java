package Code.Java.JiCheng;


// 外部类
public class a4_Outer {
    public String name; // 实例变量
    public static int age; // 静态变量

    // 静态内部类: 只能引用外部类的静态变量 和 静态方法
    public static class Inner {
        public String name; // 实例变量
        public static int age; // 静态变量

        // 内部类方法区
        public void test3() {
            System.out.println("内部类的实例方法");
            System.out.println(name);
            System.out.println(age); 
            
            System.out.println(a4_Outer.age); // 外部类的静态方法
            // System.out.println(a4_Outer.name); // 外部类的实例方法---找不到

            test4(); // 内部类的静态方法
            a4_Outer.test2(); // 外部类的静态方法
            // a4_Outer.test1(); // 外部类的实例方法---找不到
        }
        public static void test4() {
            System.out.println("内部类的静态方法");
        }

        public Inner(String name) {
            this.name = name;
        }

        public Inner() {
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public static int getAge() {
            return age;
        }

        public static void setAge(int age) {
            Inner.age = age;
        }
    }
    // 外部类方法
    // 实例方法
    public void test1(){
        System.out.println("实例方法test1----测试");
    }

    // 静态方法
    public static void test2(){
        System.out.println("静态方法test2---测试");
    }
}
