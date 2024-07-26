package Code.Java.Collection;

import java.util.Objects; // Object包作用是提供一些实用工具类，包括用于操作对象、字符串、基本类型的实用工具类。

//作为集合的泛型类型使用
public class a0_Student {
    private String name;
    private int age;

    public a0_Student() {
    }

    public a0_Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

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

    @Override
    public String toString() {
        return "a0_Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        a0_Student student = (a0_Student) o;
        return age == student.age && Objects.equals(name, student.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}
