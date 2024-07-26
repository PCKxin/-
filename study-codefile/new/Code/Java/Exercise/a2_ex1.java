package Code.Java.Exercise;

public class a2_ex1 {
    /*
    买飞机票
     * 用户购买机票时，机票原价会按照淡季、旺季，头等舱还是经济舱的情况进行相应的优惠，
     * 优惠方案如下：5-10月为旺季，头等舱9折，经济舱8.5折； 
     * 11月到来年4月为淡季，头等舱7折，经济舱6.5折，请开发程序计算出用户当前机票的优惠价。
    */
    
    public static void main(String[] args) {
        double v = ticketLv(1000, 11, "头等舱");
        System.out.println(v);
    }
    public static double ticketLv(double money ,int month ,String type){
        //判断旺季还是淡季
        if(month >= 5 && month <= 10){
            //旺季
            switch (type){
                case "头等舱":
                    money*=0.9;
                    break;
                case "经济舱":
                    money*=0.85;
                    break;
            }
        }else {
            //淡季
            switch (type){
                case "头等舱":
                    money*=0.7;
                    break;
                case "经济舱":
                    money*=0.65;
                    break;
            }
        }
        return money;
    }
}
