package Code.Java.Exercise;

import java.util.Scanner;
/*
比赛中，可能有多名评委要给选手打分，分数是[0 - 100]之间的整数。
选手最后得分为：去掉最高分、最低分后剩余分数的平均分
请编写程序能够录入多名评委的分数，并算出选手的最终得分。
*/ 

public class a2_ex3 {
        public static void main(String[] args) {
        System.out.println(getAvg(6));
    }
    public static double getAvg(int n){
        //定义一个动态数组
        int[] fs= new int[n];
        //新建扫描仪
        Scanner sc = new Scanner(System.in);
        //遍历数组的信息,存储
        for (int i = 0; i < n; i++) {
            System.out.println("请第" + (i+1) + "位评委输入评分");
            //用户输入信息 并存储,
            fs[i]= sc.nextInt();
        }
        int sum = 0;//和
        int max=fs[0];//最大值
        int min =fs[0];//最小值
        //判断筛选出最高分和最低分
        for (int i = 0; i < fs.length; i++) {

            sum += fs[i];//sum= sum + fs[i]  和
            //最大值
            if(max<fs[i]){
                max = fs[i];
            }

            //最小值
            if(min>fs[i]){//如果数组的当前元素小于min值,将当前元素赋值给min
                min = fs[i];
            }
        }

        //返回结果:(sum-max-min)/(n-2)
        sc.close();
        return 1.0*( (sum-max-min)/(n-2));
    }
}
