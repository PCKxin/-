
**else还可搭配for循环和while循环**

### 注：别跟傻狗似的看见 i 又迷惑了，i 等于缩进下的指令
### 注：a 是循环用的，没看见夹中间了吗

## for例：
```python
	for i in range(5):
	    a = int(input('请输入0来结束循环，你有5次机会:'))
	    if a == 0:
	        print('你触发了break语句，循环结束，导致else语句不会生效。')    
	        break
	else:
	    print('5次循环你都错过了，else语句生效了。')
```
## while例：
```python
	i = 0
	while i < 5:
		a = int(input('请输入0结束循环，你有5次机会:')) 
		i = i+1
		If a == 0:
			print('你触发了break语句，导致else语句不会生效。')
			break
	else:
		print('5次循环你都错过了，else语句生效了。')

#当循环中没有碰到break语句，就会执行循环后面的else语句，否则就不会执行