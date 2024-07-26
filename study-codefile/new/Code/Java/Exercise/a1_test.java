package Code.Java.Exercise;


public class a1_test {
    public static void main(String[] args) {
        // 声明员工数组, 使用多态 , 
        a1_Employee[] emps = new a1_Employee[3];
        // 创建员工对象
        a1_SalaryEmployee se1 = new a1_SalaryEmployee("Shiroko", 10000,20,1);
        emps[0] = se1;
        // 打印出emps
        // System.out.println(emps);
        emps[1] = new a1_HourEmployee("Kuroko", 50, 20);
        emps[2] = new a1_Manager("Kuroko", 12000, 20, 2, 0.3);

        // 遍历员工数组
        double sum = 0;
        for (int i = 0; i < emps.length; i++) {
            System.out.println(emps[i].getInfo());
            sum += emps[i].earning();
        };
        System.out.println(sum);
        
    }
}
