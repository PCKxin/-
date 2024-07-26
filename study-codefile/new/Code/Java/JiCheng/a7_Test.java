package Code.Java.JiCheng;

import java.util.Objects;

public class a7_Test {
    public static void main(String[] args) {
        Student03 s1 = new Student03("小天", 22);
        System.out.println(s1); // 当前对象在堆内存中的地址：com.buba.xin08.Student03@3b07d329
        System.out.println(s1.toString());

        // 重写前: 判断两个对象地址是否相等--s1 和 s2 生成地址不同私有false
        Student03 s2 = new Student03("小天",22);
        System.out.println(s1.equals(s2));
        System.out.println(s1 == s2);
    }
}

class Student03{
    private String name;
    private int age;

    // 重写equals 方法让其对比内容而不是地址
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student03 student03 = (Student03) o;
        return age == student03.age && Objects.equals(name, student03.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    // 重写toString -- 为了完整拼接内容
    @Override
    public String toString(){
        return "Student03{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    /*构造器*/
    public Student03() {
    }
    public Student03(String name, int age) {
        this.name = name;
        this.age = age;
    }

    /*get  set*/
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
}
