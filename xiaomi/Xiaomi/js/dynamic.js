var i=0;
var timer
//第一个轮播图
function show1(){
	timer=setInterval(function(){
		i++;
		if(i>2)i=0;
		$('.pic1 ul li').eq(i).fadeIn(600).siblings().fadeOut();
	},2000)
}
show1();
$('#wrap i').click(function(){
	alert('1');
})
