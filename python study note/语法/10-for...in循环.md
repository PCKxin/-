```python
for i in [1,2,3,4,5]:
    print(i)
	# i在列表里过一遍
```
```python
for o in range(11):            
#range函数输出：0-10
    print('书桓走的第'+str(o)+'天')
```

`Range(x)`函数:

从0生成X-1整数序列

例：range(a,b,c) 从 a 数到 b-1（取头不取尾），间隔为 C

```python
例：
for i in range(0,10,2)
	Print(i)   #输出0，2，4，6，8
```
```python
        range(a,b,c)
		a:计数从a开始，不填时，默认从0开始
		#例如:range（1，5）#计数从1开始生成
		b:计数到b结束，不包括b
		#例如:range(11)#计数从0到11，不包括11
		c:计数的间隔，不填时默认为1
        #例如:range(0，30，5)#计数间隔为5
```

#第三种
```python
d = {'小明':'醋','小红':'油','小白':'盐','小张':'米'}
for q in d:
    print(d[q])
		#输出：醋，油，柴，米
```
#第四种
```python
for m in range(1,8):  # 为同时能运行两个循环，设新参数 m。
    if m != 4:  # 当   m != 4，执行打印语句；等于4时不打印。 # ! = 不等于
        print(m)
```

#从零到100分别x5
```python
for q in range(1,101):
    print(q*5)
```