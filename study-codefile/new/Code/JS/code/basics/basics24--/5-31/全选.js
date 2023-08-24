// 封装函数    给每个复选框和按钮加事件
function getClick(id,fn){
  var id=document.getElementById(id);
  id.onclick=fn;
}

 //获取兴趣的复选框  通过name属性  得到的是数组
 var hobbys=document.getElementsByName("hobby");

//全选/取消全选
getClick('checkedOrNo',function(){
  for(var i=0;i<hobbys.length;i++){
    if(this.checked){ //怎么判断的:通过this,因为是当前点击的复选框,
      hobbys[i].checked=true; //
    }else{
      hobbys[i].checked=false;
    }
  }
})
//全选
getClick('checkedAll',function(){
  //直接选中 全选/取消全选的复选框
  document.getElementById("checkedOrNo").checked=true;
  for(var i=0;i<hobbys.length;i++){
    hobbys[i].checked=true;
  }
})

//反选
getClick("fan",function(){
 for(var i=0;i<hobbys.length;i++){
    document.getElementById("checkedOrNo").checked=true;
   if(hobbys[i].checked){
     hobbys[i].checked=false;
      document.getElementById("checkedOrNo").checked=false;
   }else{
     hobbys[i].checked=true;
   }
 }
})

//取消选择
 
getClick("reset",function(){
  document.getElementById("checkedOrNo").checked=false;
  for(var i=0;i<hobbys.length;i++){
    hobbys[i].checked=false;
  }
})
 

//提交
getClick("submit", function () {
  var hobby2 = [];
  for (var i = 0; i < hobbys.length; i++) {
    if (hobbys[i].checked) {
      hobby2.push(hobbys[i].value);
    }
  }
  if (hobby2.length > 0) {
    alert(hobby2);
  } else {
    alert("内容为空，请选择");
  }

})