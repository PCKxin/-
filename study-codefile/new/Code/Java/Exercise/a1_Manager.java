package Code.Java.Exercise;

/*
4、声明一个子类Manager经理，继承SalaryEmployee，
增加属性：奖金比例
重写方法，public double earning()返回实发工资，
实发工资 = (薪资 - 薪资/工作日天数 * 请假天数)*(1+奖金比例)

*/ 

public class a1_Manager extends a1_SalaryEmployee {
    private double bonusRate; // 奖金比例

    // 获取奖金比例
    public double getBonusRate(){
        return bonusRate;
    }
    // 设置奖金比例
    public void setBonusRate(double bonusRate){
        this.bonusRate = bonusRate;
    }

    // 构造方法
    public a1_Manager(String name, double salary, int workDays, int leaveDays, double bonusRate){
        super(name, salary, workDays, leaveDays);
        this.bonusRate = bonusRate;
    }


    // 重写方法
    @Override
    public double earning(){
        return super.earning() * (1 + bonusRate);
    };



}
