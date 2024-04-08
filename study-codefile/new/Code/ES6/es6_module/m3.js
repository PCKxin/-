// 默认暴露
export default{
    school:"ABYDOS",
    change:function funct(){// q: 为什么不能直接用function change(){}? a: 因为这里是对象的属性, 不是函数的名字
        console.log('ABYDOS is the best!')
    }
}