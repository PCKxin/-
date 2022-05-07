## 语法：
```python
try:
#尝试执行下列代码
	XXX
	XXX
Except 报错名称:
#报错后执行这些
	XXX
	XXX
Except 报错名称:   #可重复多个报错条件
	XXX
	XXX

方式2：将两个（或多个）异常放在一起，只要触发其中一个，就执行所包含的代码。
	except(ZeroDivisionError,ValueError):
		print('你的输入有误，请重新输入！')
    
方式3：常规错误的基类，假设不想提供很精细的提示，可以用这个语句响应常规错误。
	except Exception:
		print('你的输入有误，请重新输入！')
```


## 例子：

```python
	while True:
		try:
			age = int(input('你今年几岁了？'))
			Break     
			#是整数停止，跳过下面直接执行下段代码
		except ValueError:       
		 #输入的不是整数报错后执行
			print('你输入的不是数字！')

	if age < 18:
		print('不可以喝酒噢')
```
