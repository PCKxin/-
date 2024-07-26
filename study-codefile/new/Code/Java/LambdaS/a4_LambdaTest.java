package Code.Java.LambdaS;

public class a4_LambdaTest {
    public static void main(String[] args) {

    }

    public static void useCalculator(Calculator calculator) {
        int result = calculator.calc(10, 20);
        System.out.println(result);
    }

}

interface Calculator {
    int calc(int a, int b);
}
