package Code.Java.DiGui;

public class a4_Demo {
    /*
    不死神兔:
    递归--直接或者间接调用自己,
    如果没有出口 会产生栈溢出异常---StackOverflowError
    */
    public static void main(String[] args) {
        System.out.println(get(8));
        System.out.println(get(20));
    }
    public static int get(int month){
        // 设置出口  第一个月或者第二个月 只有一对
        if(month == 1 || month == 2){
            return 1;
        }else{
            // 从第三个月开始  兔子的对数是前两个月的和
            // month == 3
            // 计算格式例: get(20) return get(18) + get(19)
            return get(month-2) + get(month-1);
        }
    }
}
