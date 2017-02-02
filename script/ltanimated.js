$(function(){
	var hasStart = false;
	var firstT = null;
	function prevClick(){
		var idx = $('.lt-contentbox li').index(this);
		showdown(idx);
		return false;
	};

	function nextClick(){
		var idx = $('.lt-contentbox li').index(this);
		showup(idx);
		return false;
	};
$('#lt-prev').click(function(){
	prevClick();
});
$('#lt-next').click(function(){
	nextClick();
})

function firstTime(){
	if(firstT){
		clearInterval(firstT);
	}
	firstT = setInterval(nextClick,5000);
}

function start(){
	var tentLeft = $('.lt-contentbox').position().left;
	if(!hasStart){
		hasStart = true;
		if(tentLeft===0){
			clearInterval(firstT);
			firstTime();
		}
	}
}

function stop(){
	clearInterval(firstT);
	hasStart = false;
}

start();
$('.lt-box').mouseover(function(){
	stop();
});
$('.lt-box').mouseout(function(){
	start();
});

function showup(index){
	var $rollobj = $('.lt-contentbox');
	var rollWidth = $rollobj.find('li').outerWidth(true);
	rollWidth = rollWidth*5;
	$rollobj.stop(true,true).animate({left:rollWidth*index},1400)
};

function showdown(index){
	var $rollobj = $('.lt-contentbox');
	var rollWidth = $rollobj.find('li').outerWidth(true);
	rollWidth = rollWidth*5;
	$rollobj.stop(true,true).animate({left:'0'},1400)
};

});

$(function(){
	$('.lt-box').hover(function(){
		$('#lt-prev').animate({opacity:'1'},300);
		$('#lt-next').animate({opacity:'1'},300);
	},function(){
		$('#lt-prev').animate({opacity:'0'},300);
		$('#lt-next').animate({opacity:'0'},300);
	})
})