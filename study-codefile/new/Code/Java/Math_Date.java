package Code.Java;

import java.util.Calendar; // 引入日历类

public class Math_Date {
    public static void main(String[] args) {
        // Math 数学类
        System.out.println("绝对值"+Math.abs(-10)); // 绝对值
        System.out.println("向上取整"+Math.ceil(3.14)); // 向上取整
        System.out.println("向下取整"+Math.floor(3.14)); // 向下取整
        System.out.println("最大值"+Math.max(3, 5)); // 最大值
        System.out.println("最小值"+Math.min(3, 5)); // 最小值
        System.out.println("幂运算"+Math.pow(2, 3)); // 幂运算
        System.out.println("四舍五入"+Math.round(3.14)); // 四舍五入
        // 生成随机数
        System.out.println("0-1随机数"+Math.random()); // 生成0-1之间的随机数, 不包括1
        System.out.println("0-100随机数" + (int) (Math.random() * 100)); // 生成0-100之间的随机数 (int)强制转换为整数
        int num = (int) (Math.random() * 10 + 1); // 生成1-10之间的随机数, +1表示从1开始
        System.out.println(num);
        
        // Date 日期类
        // 实例化日期对象 单列模式 意思是 一个类只能实例化一个对象
        Calendar cal = Calendar.getInstance();

        // 设置一个年份
        // cal.set(Calendar.YEAR, 2022);
        // 设置年月日时分秒
        // cal.set(2022, 10, 10, 10, 10, 10);

        // 不设置默认获取系统时间
        // 获取年份
        System.out.println("当前年份:" + cal.get(Calendar.YEAR));
        // 获取月份
        System.out.println("当前月份:" + (cal.get(Calendar.MONTH) + 1)); // 月份从0开始
        // 获取日
        System.out.println("当前日:" + cal.get(Calendar.DATE));
        // 获取时
        System.out.println("当前时:" + cal.get(Calendar.HOUR));
        // 获取分
        System.out.println("当前分:" + cal.get(Calendar.MINUTE));
        // 获取秒
        System.out.println("当前秒:" + cal.get(Calendar.SECOND));


        // 手写计算
        // 求和
        int[] arr = {22,33,44,55,66};
        int sum = 0;
        for(int i : arr){
            sum += i;
        }
        System.out.println("手动求和: "+ sum);

        // 最大值
        // for(int i : arr){
        //     if(sum < i){
        //         sum = i;
        //     }
        // }
        // System.out.println("手动最大值: "+ sum);
        
        // 最小值
        for(int i : arr){
            if(sum > i){
                sum = i;
            }
        }
        System.out.println("手动最小值: "+ sum);
    }
}
