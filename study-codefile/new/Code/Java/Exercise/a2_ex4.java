package Code.Java.Exercise;

/*
某系统的数字密码是一个四位数，如1983，
为了安全，需要加密后再传输
加密规则是：对密码中的每位数，都加5 ,再对10求余
最后将所有数字顺序反转，得到一串加密后的新数，请设计出满足本需求的加密程序！
*/ 

public class a2_ex4 {
    public static void main(String[] args) {
        PasLock(1983);
    }

    public static int PasLock(int n){
        int[] arr = new int[4]; // 设定一个四位数的数组
        int i = 0;
        System.out.println("原始数值：" + n);
        while(n != 0){
            System.out.println("n的值：" + n + " ");
            arr[i] = (n % 10 + 5) % 10; // (n % 10 + 5) 意思是取n的最后一位数，加5后对10求余
            System.out.println("加密后的数值：" + arr[i]);
            n /= 10; // n = n / 10 取下一个位的数值
            System.out.println("下一次循环n的值：" + n);
            i++;
        }
        int res = 0;
        // 测试用int res = 8;
        for(int j = 0; j < 4; j++){
            // System.out.println(res*10 + arr[j]);
            // res = res * 10 + arr[j]; // 从数组的第一个数开始，每次乘10，再加上下一个数
            // 为什么要乘10呢？因为每次加的数都是个位数，所以要乘10，再加上下一个数
            System.out.println("加密重组后的数值：" + res);
        }
        System.out.println(res);
        return res;
    }
}
