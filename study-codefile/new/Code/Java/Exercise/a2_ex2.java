package Code.Java.Exercise;

import java.util.Random;

/*
生成指定位数的验证码，每位可以是数字、大小写字母。
*/ 

public class a2_ex2 {
        public static void main(String[] args) {
        String code = code(6); // 6位
        System.out.println(code);
    }
    public static String code(int num){
        //导包
        Random r = new Random();
        String code1="";//用来拼接字符信息
        //遍历--用来定义生成随机数的位数
        for (int i = 0; i < num; i++) {
            //生成随机数
            int type = r.nextInt(3)+1;
            //数字--1(0-9) ,大写字母-2(65), 小写的字母--3(97)
            switch (type){
                case 1:
                    code1 +=  r.nextInt(10);//0-9
                    break;
                case 2://A-65 +25z
                    char ch1= (char)(r.nextInt(26)+65);
                    code1+=ch1;
                    break;
                case 3://a-97 +25z  25(0-24)
                    code1 += (char)(r.nextInt(26)+97);
                    break;
            }
        }
        return code1;
    }
}
