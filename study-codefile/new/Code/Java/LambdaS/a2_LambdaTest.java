package Code.Java.LambdaS;

public class a2_LambdaTest {
    public static void main(String[] args) {

    }

    public static void useStringHandler(StringHandler stringHandler) {
        stringHandler.printMessage("itheima");
    }
}

interface StringHandler {
    void printMessage(String msg);
}
