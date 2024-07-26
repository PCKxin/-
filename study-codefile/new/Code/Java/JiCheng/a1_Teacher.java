package Code.Java.JiCheng;

public class a1_Teacher extends a1_People {
    public String name = "老师的变量";
    @Override
    public void run() {
        System.out.println("老师跑的费劲巴拉");
    }
    // 老师独有的行为
    public void test(){
        System.out.println("专属于老师的独有行为");
    };
}
