package Code.Java.LambdaS;

public class a1_LambdaTest {
    /*
    * Lambda表达式只接受接口中的抽象方法(函数式接口,接口里有且只有一个抽象方法)
    * 用@FunctionalInterface去验证
    */ 
    public static void main(String[] args) {

        useShowHandler(
            new ShowHandler() {
                @Override
                public void show() {
                    System.out.println("匿名内部类");
                }
            }
        );
        // Lambda表达式
        // (匿名内部类的形参)->{被重写的方法体}
        useShowHandler(
            ()->{
                System.out.println("lambda表达式");
            }
        );
        // lambda表达式
        // 如果表达式方法体只有一行代码.大括号可以不写,同时要省略分号
        useShowHandler(()->System.out.println("lambda表达式"));

        useStringHandler(
            new StringHandler() {
                @Override
                public void printMessage(String msg) {
                    System.out.println(msg);
                }
            }
        );

        useStringHandler(
            (msg)->{
                System.out.println(msg);
            }
        );
        //lambda表达式
        // 参数类型可以省略不写
        // 有且只有一个参数时,参数类型和()都可以省略
        useStringHandler(msg->System.out.println(msg));

        useRandomNumHandler(
            new RandomNumHandler() {
                @Override
                public int getNumber() {
                    return (int)(Math.random()*100);
                }
            }
        );
        
        useRandomNumHandler(
            ()->{
                return (int)(Math.random()*100);
            }
        );

        useCalculator(
            new Calculator() {
                @Override
                public int calc(int a, int b) {
                    return a + b;
                }
            }
        );
        
        useCalculator(
            (a,b)->{
                return a + b;
            }
        );
    }
    // 函数式接口
    // 显示处理
    public static void useShowHandler(ShowHandler showHandler) {
        showHandler.show();
    }
    // 字符串处理
    public static void useStringHandler(StringHandler stringHandler) {
        stringHandler.printMessage("itheima");
    }
    // 随机数处理
    public static void useRandomNumHandler(RandomNumHandler randomNumHandler) {
        int result = randomNumHandler.getNumber();
        System.out.println(result);
    }
    // 计算器
    public static void useCalculator(Calculator calculator) {
        int result = calculator.calc(10, 20);
        System.out.println(result);
    }
}
@FunctionalInterface // 验证是否是函数式接口
interface ShowHandler { // interface 定义
    void show(); // 抽象方法
}
@FunctionalInterface
interface StringHandler {
    void printMessage(String msg);
}
@FunctionalInterface
interface RandomNumHandler {
    int getNumber();
}
@FunctionalInterface
interface Calculator {
    int calc(int a, int b);
}
