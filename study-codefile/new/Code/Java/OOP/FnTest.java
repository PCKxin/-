package Code.Java.OOP;

public class FnTest {
    public static void main(String[] args) {
        People p1 = new People();
        // 对象名.属性名 调用属性
        p1.name = "shiroko";
        p1.age = 20;
        // 对象名.方法名 调用方法
        p1.eat();

        System.out.println(p1.name);
        System.out.println(p1.age);

        //////
        Car c1 = new Car();
        c1.color = "Sport black";
        c1.brand = "Audi";
        c1.model = "RS7";
        c1.price = 1280000;

        c1.CarMsg();

        //////
        Dog d1 = new Dog("cat", 2);
        
        d1.getName();
        d1.setDog("Big Huang", 3);


        //////
        ExtendsStudy e1 = new ExtendsStudy();
        e1.show();
        e1.play("CarPlay");
        e1.play();
        System.out.println(e1.name);
        System.out.println(e1.price);


        /////
        Emp_SaleMan saleMan = new Emp_SaleMan(1,"Shiroko","ABYDOS",10000.1,"本科");
        saleMan.work();
        // saleMan.setName("小绿");
        saleMan.show();
        Emp_service service = new Emp_service(1,"S1","S100",2333.4,8);
        service.work(); 
        service.show();
    }
}
