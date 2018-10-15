/*
	* @Author: Administrator
	* @Date:   2018-09-03 14:11:33
	* @Last Modified by:   Administrator
	* @Last Modified time: 2018-09-03 15:01:55
*/
// 自动播放
var timer
var num=0;


function gogo(){
	timer=setInterval(function(){
		num++;
		if(num>5)num=0;
		// 如果条件语句只有一条，可以省略{}
		box.style.left=-num*1423+'px';
		// 圆圈变色
		for(var i=0;i<list.children.length;i++){
			list.children[i].className=''
		}
		list.children[num].className='current';

	},2000)
}
gogo()
wrap.onmouseenter=function(){
	clearInterval(timer)
}
wrap.onmouseleave=function(){
	gogo()
	
}
// 点击圆圈
// 选择list 内部所有的li
var tags=list.getElementsByTagName('li');
for(var j=0;j<tags.length;j++){
	// 自定义标签属性：
	tags[j].index=j;
	tags[j].onclick=function(){
		for(var i=0;i<list.children.length;i++){
			list.children[i].className=''
		}
		this.className='current';
		// 把点击和自动播放联系起来
		num=this.index;
		box.style.left=-num*1423+'px';
	}
}
// 点击右
right.onclick=function(){
	num++;
	if(num>5)num=0;
	// 如果条件语句只有一条，可以省略{}
	box.style.left=-num*1423+'px';
	// 圆圈变色
	for(var i=0;i<list.children.length;i++){
		list.children[i].className=''
	}
	list.children[num].className='current';
}
left.onclick=function(){
	num--;
	if(num<0)num=5;
	// 如果条件语句只有一条，可以省略{}
	box.style.left=-num*1423+'px';
	// 圆圈变色
	for(var i=0;i<list.children.length;i++){
		list.children[i].className=''
	}
	list.children[num].className='current';
}