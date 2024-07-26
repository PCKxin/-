package Code.Java.JiCheng;

public class a5_Test {
    /* 匿名内部类 */
    public static void main(String[] args) {
        // 在p2父类里面创建一个内部类 但是 当前内部类 没有起名字
        P2 p2 = new P2(){
            @Override
            public void run() {
                System.out.println("学生奔跑");
            }
        };
        p2.run();
    }
}

// 子类
/*class SG2 extends P2{
    @Override
    public void run() {
        System.out.println("学生奔跑");
    }
}*/
// 父类
class P2{
    public void run(){
        System.out.println("奔跑");
    }
}
