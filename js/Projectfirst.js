$(function(){
	
		$(".box-logo").mouseenter(function(){
		$(".logo2").stop().animate({height:"46px"})
	}).mouseleave(function(){
		$(".logo2").stop().animate({height:"0px"})
	})
})