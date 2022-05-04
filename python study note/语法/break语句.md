#循环内部使用

#`if…break` 意思是满足某一条件，提前结束循环

```python
for循环写法：
	for……in……:
		…
		If ….:
			Break
```
```python
while循环写法：
	while XXXX：
		…
		If …:
			Break
```
```python
while例子：
	While ture :   #true是条件恒为真，开启无限循环，搭配break结束
		print('上供一对童男童女')  
		t = input('孙悟空来了吗')
		if t == '来了':
			break
	print('孙悟空制服了鲤鱼精，陈家庄再也不用上供童男童女了')
```