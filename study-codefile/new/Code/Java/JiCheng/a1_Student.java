package Code.Java.JiCheng;

public class a1_Student extends a1_People { // 继承会议
    // 重写父类方法
    public String name = "学生的变量";
    @Override // @Override 表示方法重写
    public void run() {
        System.out.println("学生跑的健步如飞，轻轻松松800米");
    }

    // 学生独有的行为
    public void test(){
        System.out.println("专属于学生的独有行为");
    };
    
}
