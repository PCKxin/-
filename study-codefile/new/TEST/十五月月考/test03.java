package TEST.十五月月考;

/*
鸡兔同笼问题：鸡兔一共35只，笼子里脚共有94只，请问分别有多少只鸡和多少只兔子。
一只鸡两只脚    2x + 4y = 94;
一只兔子四只脚  x + y = 35; 2x + 2y = 70;  2y = 24; y = 12 x = 23;
*/ 

public class test03 {
    public static void main(String[] args) {
        int CR_head = 35;
        int CR_foot = 94;
        
        int Chicken, Rabbit;

        CR_foot -= CR_head * 2; // 砍掉所有动物的一双脚, 还有脚的就是兔子
        Rabbit = CR_foot / 2;
        Chicken = CR_head - Rabbit;

        System.out.println("兔子: " +Rabbit+ "鸡: " + Chicken);
    }
}
