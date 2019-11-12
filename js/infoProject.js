$(function(){
	function info(){
		var domwidth=$(window).width()
		var domheight=domwidth/3
		$(".banner").css("height",domheight+"px")
	}
	info()
	window.onresize=function(){
		info();
	}
//	回到顶部
    addEventListener("mousewheel",function(){
    	var $scroll=document.body.scrollTop || document.documentElement.scrollTop;
    	if($scroll>400)
    	{
    		$(".back-top").css("display","block")
    	}
    	else{
    		$(".back-top").css("display","none")
    	}
    	$(".back-top").click(function(){
    		document.body.scrollTop = document.documentElement.scrollTop=0
    	})
    })
//  侧边栏
     $(".side").click(function(){
     	$(this).stop().animate({"right":"0"})
     }).mouseleave(function(){
     	$(this).stop().animate({"right":"-35px"})
     })
//   顶部logo样式设置
$(".box-logo").mouseenter(function(){
	$(".logo2").stop().animate({"height":"46px"})
	}).mouseleave(function(){
		$(".logo2").stop().animate({"height":"0"})
})
})
