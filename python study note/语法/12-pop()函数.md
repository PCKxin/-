#提取:取到元素，对列表没有影响；

#删除:删除列表的元素。

#pop()函数用于移除列表中的一个元素（默认最后一个元素），并且返回该元素的值。

#语法：

    list.pop(obj=list[-1]) 
    //默认为index=-1，删除最后一个元素。
    obj是可选参数，也可以指定元素对象。

```python
例：
	students = ['小明','小红','小刚']
	for i in range(3):
	    student1 = students.pop(0)  
        # 运用pop()函数，同时完成提取和删除。
	    students.append(student1)  
        # 将移除的student1安排到最后一个座位。
	    print(students)
```