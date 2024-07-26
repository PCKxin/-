package Code.Java;

public class Revise {
    /*方法
    * 1-有返回值的方法
    *   字符串，整数，数组 int[]
    *   return:直接返回我们需要的数据，结束当前方法，该关键字下一行不能有内容
    *   直接调用：
    *       1-直接调用
    *       2-用变量接着调用
    *       3-打印输出调用
    * 2-无返回值的方法
    *   调用方法：直接调用
    *   return：结束当前方法
    *   一段代码 需要重复执行时使用方法
    *   让代码简洁清晰
    *
    *
    * */

    public static void main(String[] args) {

        // 引用类型传参机制
        int[] arrs = {10,20,30};
        change(arrs);
        System.out.println("方法外："+arrs[1]);

        // 基本类型传参机制
        // 在方法里显示变量的基本类型数据相当
        // 复制了一份数值显示，所以 你更改复制后的值 不影响原值
        int a = 20;
        change(a);
        System.out.println("方法外"+a);

        /*
         * 一同：方法名称相同
         * 三不同：形参个数不同，类型不同，顺序不同
         * 调用时传参数会自动匹配类型和类型顺序对应的重载方法
        */
        sum();
        sum(55);
        sum(44 ,33.0);


        // 打印 int 类型的数组内容
        int[] arr = {10,20,30,40,22};
        printArray(arr);

        int[] arr1 = null;
        printArray(arr1); // 报错

        // 判断数组值是否一样
        int[] arr2 = {10,20,30};
        int[] arr3 = null;
        @SuppressWarnings("unused")
        int[] arr4 = null;
        if(isEquals(arr2,arr3)){
            System.out.println("两个数组值一样");
        }else{
            System.out.println("两个数组值不一样");
        }

        // 成员方法
        Revise stu01 = new Revise();
        stu01.printS();

    }
    // 有返回值的方法例
    public static int getSum(int a , int b){
        return a+b;
    }
    // 无返回值的方法
    public static void getSum2(int a, int b){
        System.out.println(a+b);
    }

    // 判断奇偶数
    // 奇偶数英文为odd and even
    public static void oddeven(int a){
        if(a % 2 == 0) {
            System.out.println("偶数");
        }else {
            System.out.println("奇数");
        }
    }


    /*
    传参机制
    1-基本类型传参机制
    2-引用类型传参机制
    3-数组传参机制
    4-可变参数传参机制
    */ 

    // 基本类型传参机制
    // 特点：形参改变，实参不变
    // 通俗来说，就是形参和实参看的是不同的数组
    public static void change(int a){
        System.out.println("方法1："+a);
        a = 5555;
        System.out.println("方法2："+a);
    }

    // 引用类型传参机制
    // 特点：形参改变，实参也改变
    // 通俗来说，就是形参和实参看的是同一个数组
    public static void change(int[] arrs){
        System.out.println("方法里面的1:"+ arrs[1]);
        // 赋值的时候 不是直接把值拿走，拿走的是地址，也就是他们看的数组是同一个
        arrs[1] = 222;
        System.out.println("方法里面的2:"+ arrs[1]);
    }

    // 方法的重载
    // 作用是: 方便调用，不用记方法名，只需要记参数列表
    // 应用场景为: 当我们需要对相同的方法进行参数不同的操作时
    // 方法重载：方法名相同，参数列表不同（参数个数不同，参数类型不同，参数顺序不同）
    // 与返回值无关
    // public static int sum(){
    //     return 10+30;
    // }
    public static void sum(){
        System.out.println("重载初始方法:"+ (10 + 30));
    }
    public static void sum(int a){
        System.out.println("重载方法1:"+ (a + 30));
    }
    public static void sum(int a, int b){
        System.out.println("重载方法2:"+ (a + b));
    }
    public static void sum(int a, double b){
        System.out.println("重载方法3:"+ (a + b));
    }

    public static void sum(double a, int b){
        System.out.println("重载方法4:"+ (a + b));
    }

    // 打印 int 类型的数组内容
    public static void printArray(int[] arr){
        // 判断数组是否为空
        if(arr == null){
            System.out.println("此数组无内容");
            return;
        }
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if(i==arr.length-1){
                System.out.print("");
            }else{
                System.out.print(",");
            }
        }
        System.out.println("]");
    }

    // 打印 String 类型的数组内容
    public static void printArray(String[] arr){
        // 判断数组是否为空
        if(arr == null){
            System.out.println("此数组无内容");
            return;
        }
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if(i==arr.length-1){
                System.out.print("");
            }else{
                System.out.print(",");
            }
        }
        System.out.println("]");
    }

    // 判断两个数组的值是否一样
    public static boolean isEquals(int[] arr1, int[] arr2){
        // 判断数组是否为空, 两个都为空 就返回true
        if(arr1 == null && arr2 == null){
            return true;
        }
        // 判断数组是否为空, 有一个为空 就返回false
        if(arr1 == null || arr2 == null){
            return false;
        }
        // 判断数组长度是否一致
        if(arr1.length != arr2.length){
            return false;
        }else{
            // 遍历数组
            for (int i = 0; i < arr1.length; i++) {
                // 比较数组的值
                if(arr1[i]!= arr2[i]){
                    return false;
                }
            }
            return true;
        }
    }

    /*
    类和对象的关系
        依赖关系：没有类就没有对象
        一对多关系：一个类可以对应多个对象
    创建对象
        类名 对象名 = new 类名();
    访问对象
        对象名.属性
    访问方法
        对象名.方法()

    如果成员变量不赋值，就会显示默认属性值;
        整形 - 0
        浮点型 - 0.0
        布尔 - false
        引用类型 - null
    */
    /*
    * 1-英文单词首字母大写，驼峰，有意义
    * 2-一个文件可以有多个类，但是只能有一个类添加 public 修饰符
    * 3-对象和对象之间不会互相影响，但多个变量指向同一个对象就会相呼影响
    */
    /*
    * 成员变量和局部变量的区别
    *   位置不同：
    *       成员在方法外，
    *       局部一般在方法内
    *   初始值不同：
    *       成员默认，
    *       局部，不初始赋值 不能使用
    *   内存位置不同:
    *       成员--堆内存
    *       局部--栈内存
    *   作用域不同：
    *       成员--整个对象
    *       局部--属于当前方法
    *   生命周期不同
    *       成员--只要对象在 成员变量就在
    *       局部--方法执行完，变量就没了
    * */
    /* 封装的设计规范：合理隐藏，合理暴露
    *   public--公开的
    *   private--隐藏
    */
    /*实体类--javaBean
     * 1-所有的成员变量必须都是私有的，须要添加个get 和 set 方法
     * 2-必须有一个公开的无参构造器
     * */

    // 成员的方法--对象的行为(这里是不添加static修饰符的)
    // 总成绩
    public void printS(){
        // 这里的this指向的是调用该方法的对象
        System.out.println("成员方法");
    }

}
