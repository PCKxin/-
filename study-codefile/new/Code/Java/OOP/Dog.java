package Code.Java.OOP;

public class Dog {
    // 封装: 
    // 属性私有化: 用private修饰字段，表示这个字段是私有的，外部代码不能访问
    // 对外提供访问接口: 用public修饰方法，表示这个方法是公开的，外部代码可以调用

    // 字段私有化
    private String name;
    @SuppressWarnings("unused") // 忽略未调用警告
    private int age;

    // 构造方法, 主要用来初始化, 也可以无参数
    // 默认存在无参的构造函数, 如果手动创建就默认不存在了
    public Dog(String name, int age) { 
        // 构造方法是一个特殊的方法，它的名称就是类名
        // 构造方法没有返回类型
        // 调用构造方法时，必须使用new操作符
        // 例如：Dog dog = new Dog("Tom", 3); 返回: dog.name = "Tom", dog.age = 3
        this.name = name;
        this.age = age;
        System.out.println("Dog's name is " + name + ", age is " + age);
    }

    // String
    public String getName() { // 读取
        System.out.println("Dog's name is " + name);
        return name;
    }

    // 设置方法
    public void setDog(String name, int age) { 
        this.name = name;
        this.age = age;
        System.out.println("Dog's name is " + name + ", age is " + age);
    }

}
