//导航栏鼠标移入事件
$('.dropdown').mouseover(function(){
    clearTimeout(timer);
	$('.dropdown-bx').stop(true).animate({'height':'83px'});
}).mouseout(function(){
    timer = setTimeout(function(){
        $('.dropdown-bx').stop(true).animate({'height':'0'});
    });
});

//导航2鼠标移入效果
var timer = null;
var isShow = false;
$('#nav-items-show .nav-bottom li:lt(7)').mouseover(function(){
    
    $('.nav-box').stop(true).slideDown().animate({'height':'221px'},300);
    $('.nav-box').find("ul").eq($(this).index()).show(300).siblings().stop(true).hide(300);
});
$('.nav-box ul').mouseover(function(){
    
    $(this).show();
    $('.nav-box').stop(true).slideDown().animate({'height':'221px'},300);
})
$('.nav-box ul').mouseout(function(){
    
       
        $('.nav-box').stop(true).slideUp();
        
})
$('#nav-items-show .nav-bottom li:lt(7)').mouseout(function(){
        
            
            $('.nav-box').stop(true).slideUp();
        
});

//导航搜索框效果
$('.search-text').focus(function(){
    $('.search-box a').fadeOut(400);
}).blur(function(){
    $('.search-box a').fadeIn(400);
})

//左侧导航效果
var isShow = false;
$('#left-box1 .leftBoxOne li').mouseover(function(){
        $('.left-boxshow').find('ul').eq($(this).index()).show().siblings().hide();
});
$('.left-boxshow ul').mouseover(function(){
    isShow = true;
    $(this).show();
});
$('.left-boxshow ul').mouseout(function(){
    if(isShow){
        $(this).hide();
        isShow = false;
    };
});
$('#left-box1').mouseout(function(){
    $('.left-boxshow').find('ul').hide();
});

//轮播图
        $(function() {
            $('#slider').vmcSlider({
                width: 1226,
                height: 460,
                gridCol: 10,
                gridRow: 5,
                gridVertical: 20,
                gridHorizontal: 10,
                autoPlay: true,
                ascending: true,
                effects: [
                    'fade', 'fadeLeft', 'fadeRight', 'fadeTop', 'fadeBottom', 'fadeTopLeft', 'fadeBottomRight',
                    'blindsLeft', 'blindsRight', 'blindsTop', 'blindsBottom', 'blindsTopLeft', 'blindsBottomRight',
                    'curtainLeft', 'curtainRight', 'interlaceLeft', 'interlaceRight', 'mosaic', 'bomb', 'fumes'
                ],
                ie6Tidy: false,
                random: false,
                duration: 2000,
                speed: 900
            });
        });

//第二屏第二产品页
$(function(){
    $('.hardware-2 .hard-right li').mouseover(function(){
        $('.hardware-2 .hard-right li').eq($(this).index()).addClass('active1').siblings().removeClass();
        $('.hardware-2 .hard-secondC ul').eq($(this).index()).addClass('active2').siblings().removeClass();
    });
    $('.hardware-2 .hard-secondC li.hard-hide4').hover(function(){
        $(this).find('div').stop(true).animate({bottom:'0px'},300);
    },function(){
        $(this).find('div').stop(true).animate({bottom:'-70px'},300);
    })
})

//底部滚动
$(function(){
    var v_width = $('.hardware-4 .hardware-ani li').width();
    var v_left = $('.hardware-4 .hardware-ani').position().left;
    $('.hardware-4 .hardpic-1 .hard-con-next').click(function(){
        if(!$('.hardware-4 .hardpic-1 .hardware-ani').is(':animated')){
            if(v_left <= -2){
                $('.hardware-4 .hardpic-1 .hardware-ani').animate({left:'0px'},500);
                v_left = 0;
            }else{
                $('.hardware-4 .hardpic-1 .hardware-ani').animate({left:'-=' + v_width + 'px'},500);
                v_left --;
            }
            $('.hardware-4 .hardpic-1 .hard-icon-1 li').eq((-v_left)).addClass('active3').siblings().removeClass('active3');
        }
    })
    $('.hardware-4 .hardpic-1 .hard-con-prev').click(function(){
        if(!$('.hardware-4 .hardpic-1 .hardware-ani').is(':animated')){
            if(v_left == 0){
                $('.hardware-4 .hardpic-1 .hardware-ani').animate({left:'-592px'},500);
                v_left = -2;
            }else{
                $('.hardware-4 .hardpic-1 .hardware-ani').animate({left:'+=' + v_width + 'px'},500);
                v_left ++;
            }
            $('.hardware-4 .hardpic-1 .hard-icon-1 li').eq(-v_left).addClass('active3').siblings().removeClass('active3');
        }
    });
    $('.hardware-4 .hardware-pic').mouseover(function(){
        $(this).find('.hard-con-prev').stop(true).animate({opacity:'1'},400);
        $(this).find('.hard-con-next').stop(true).animate({opacity:'1'},400);
    }).mouseout(function(){
        $(this).find('.hard-con-prev').stop(true).animate({opacity:'0'},400);
        $(this).find('.hard-con-next').stop(true).animate({opacity:'0'},400);
    })
    $('.hardware-4 .hardpic-2 .hard-con-next').click(function(){
        if(!$('.hardware-4 .hardpic-2 .hardware-ani').is(':animated')){
            if(v_left <= -3){
                $('.hardware-4 .hardpic-2 .hardware-ani').animate({left:'0px'},500);
                v_left = 0;
            }else{
                $('.hardware-4 .hardpic-2 .hardware-ani').animate({left:'-=' + v_width + 'px'},500);
                v_left --;
            }
            $('.hardware-4 .hardpic-2 .hard-icon-1 li').eq((-v_left)).addClass('active3').siblings().removeClass('active3');
        }
    })
    $('.hardware-4 .hardpic-2 .hard-con-prev').click(function(){
        if(!$('.hardware-4 .hardpic-2 .hardware-ani').is(':animated')){
            if(v_left == 0){
                $('.hardware-4 .hardpic-2 .hardware-ani').animate({left:'-888px'},500);
                v_left = -3;
            }else{
                $('.hardware-4 .hardpic-2 .hardware-ani').animate({left:'+=' + v_width + 'px'},500);
                v_left ++;
            }
            $('.hardware-4 .hardpic-2 .hard-icon-1 li').eq(-v_left).addClass('active3').siblings().removeClass('active3');
        }
    });
    $('.hardware-4 .hardpic-3 .hard-con-next').click(function(){
        if(!$('.hardware-4 .hardpic-3 .hardware-ani').is(':animated')){
            if(v_left <= -3){
                $('.hardware-4 .hardpic-3 .hardware-ani').animate({left:'0px'},500);
                v_left = 0;
            }else{
                $('.hardware-4 .hardpic-3 .hardware-ani').animate({left:'-=' + v_width + 'px'},500);
                v_left --;
            }
            $('.hardware-4 .hardpic-3 .hard-icon-1 li').eq((-v_left)).addClass('active3').siblings().removeClass('active3');
        }
    })
    $('.hardware-4 .hardpic-3 .hard-con-prev').click(function(){
        if(!$('.hardware-4 .hardpic-3 .hardware-ani').is(':animated')){
            if(v_left == 0){
                $('.hardware-4 .hardpic-3 .hardware-ani').animate({left:'-888px'},500);
                v_left = -3;
            }else{
                $('.hardware-4 .hardpic-3 .hardware-ani').animate({left:'+=' + v_width + 'px'},500);
                v_left ++;
            }
            $('.hardware-4 .hardpic-3 .hard-icon-1 li').eq(-v_left).addClass('active3').siblings().removeClass('active3');
        }
    });
    $('.hardware-4 .hardpic-4 .hard-con-next').click(function(){
        if(!$('.hardware-4 .hardpic-4 .hardware-ani').is(':animated')){
            if(v_left <= -3){
                $('.hardware-4 .hardpic-4 .hardware-ani').animate({left:'0px'},500);
                v_left = 0;
            }else{
                $('.hardware-4 .hardpic-4 .hardware-ani').animate({left:'-=' + v_width + 'px'},500);
                v_left --;
            }
            $('.hardware-4 .hardpic-4 .hard-icon-1 li').eq((-v_left)).addClass('active3').siblings().removeClass('active3');
        }
    })
    $('.hardware-4 .hardpic-4 .hard-con-prev').click(function(){
        if(!$('.hardware-4 .hardpic-4 .hardware-ani').is(':animated')){
            if(v_left == 0){
                $('.hardware-4 .hardpic-4 .hardware-ani').animate({left:'-888px'},500);
                v_left = -3;
            }else{
                $('.hardware-4 .hardpic-4 .hardware-ani').animate({left:'+=' + v_width + 'px'},500);
                v_left ++;
            }
            $('.hardware-4 .hardpic-4 .hard-icon-1 li').eq(-v_left).addClass('active3').siblings().removeClass('active3');
        }
    });
})

//底部视频
var video = document.getElementById('myVideo');
var video = $('#myVideo');
var video_2 = document.getElementById('myVideo-2');
var video_2 = $('#myVideo-2');
var video_3 = document.getElementById('myVideo-3');
var video_3 = $('#myVideo-3');
var video_4 = document.getElementById('myVideo-4');
var video_4 = $('#myVideo-4');
$(function(){
    
    var videoControl = document.getElementsByClassName('contro1'),
    ran = document.getElementById('ran');


    video[0].removeAttribute('controls');
    $('#hardvedio-1 .btnPlay').on('click',function(){
        if(video[0].paused){
            video[0].play();
        }else{
            video[0].pause();
        }
        return false;
    });
    video.on('loadedmetadata',function(){
        $('#hardvedio-1 .duration').text(timeFormat(video[0].duration));
    });
    video.on('timeupdate',function(){
        var currentPos = video[0].currentTime;
        var maxduration = video[0].duration;
        var percentage = 100 * currentPos / maxduration;
        $('#hardvedio-1 .timeBar').css('width', percentage+'%');
        $('#hardvedio-1 .current').text(timeFormat(currentPos));
    });

    var timeDrag = false;
    $('#hardvedio-1 .progressBar').mousedown(function(e) {
       timeDrag = true;
       updatebar(e.pageX);
    });
    $(document).mouseup(function(e) {
       if(timeDrag) {
          timeDrag = false;
          updatebar(e.pageX);
       }
    });
    $(document).mousemove(function(e) {
       if(timeDrag) {
          updatebar(e.pageX);
       }
    });
     
    //update Progress Bar control
    var updatebar = function(x) {
       var progress = $('#hardvedio-1 .progressBar');
       var maxduration = video[0].duration; //Video duraiton
       var position = x - progress.offset().left; //Click pos
       var percentage = 100 * position / progress.width();
     
       //Check within range
       if(percentage > 100) {
          percentage = 100;
       }
       if(percentage < 0) {
          percentage = 0;
       }
     
       //Update progress bar and video currenttime
       $('#hardvedio-1 .timeBar').css('width', percentage+'%');
       $('#hardvedio-1 .timeIcon').css('left', percentage+'%');
       video[0].currentTime = maxduration * percentage / 100;
    };

    //Mute/Unmute control clicked
    $('#hardvedio-1 .muted').click(function() {
       video[0].muted = !video[0].muted;
       return false;
    });
     
    //Volume control clicked
    $('#hardvedio-1 .volumeBar').on('mousedown', function(e) {
       var position = e.pageX - volume.offset().left;
       var percentage = 100 * position / volume.width();
       $('#hardvedio-1 .volumeBar').css('width', percentage+'%');
       video[0].volume = percentage / 100;
    });

    var timeFormat = function(seconds){
        var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
        var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
        return m+":"+s;
    };

    $('#hardvedio-1 .volumeBar').on('click', function() {
       //For Webkit
       video[0].webkitEnterFullscreen();
     
       //For Firefox
       video[0].mozRequestFullScreen();
     
       return false;
    });

    
});

$(function(){
    
    var ran_2 = document.getElementById('ran-2');

    video_2[0].removeAttribute('controls');
    $('#hardvedio-2 .btnPlay').on('click',function(){
        if(video_2[0].paused){
            video_2[0].play();
        }else{
            video_2[0].pause();
        }
        return false;
    });

    video_2.on('loadedmetadata',function(){
        $('#hardvedio-2 .duration').text(timeFormat(video_2[0].duration));
    });
    video_2.on('timeupdate',function(){
        var currentPos = video_2[0].currentTime;
        var maxduration = video_2[0].duration;
        var percentage = 100 * currentPos / maxduration;
        $('#hardvedio-2 .timeBar').css('width', percentage+'%');
        $('#hardvedio-2 .current').text(timeFormat(currentPos));
    });

    var timeDrag = false;
    $('#hardvedio-2 .progressBar').mousedown(function(e) {
       timeDrag = true;
       updatebar(e.pageX);
    });
    $(document).mouseup(function(e) {
       if(timeDrag) {
          timeDrag = false;
          updatebar(e.pageX);
       }
    });
    $(document).mousemove(function(e) {
       if(timeDrag) {
          updatebar(e.pageX);
       }
    });
     
    //update Progress Bar control
    var updatebar = function(x) {
       var progress = $('#hardvedio-2 .progressBar');
       var maxduration = video_2[0].duration; //Video duraiton
       var position = x - progress.offset().left; //Click pos
       var percentage = 100 * position / progress.width();
     
       //Check within range
       if(percentage > 100) {
          percentage = 100;
       }
       if(percentage < 0) {
          percentage = 0;
       }
     
       //Update progress bar and video currenttime
       $('#hardvedio-2 .timeBar').css('width', percentage+'%');
       $('#hardvedio-2 .timeIcon').css('left', percentage+'%');
       video_2[0].currentTime = maxduration * percentage / 100;
    };

    //Mute/Unmute control clicked
    $('#hardvedio-2 .muted').click(function() {
       video_2[0].muted = !video_2[0].muted;
       return false;
    });
     
    //Volume control clicked
    $('#hardvedio-2 .volumeBar').on('mousedown', function(e) {
       var position = e.pageX - volume.offset().left;
       var percentage = 100 * position / volume.width();
       $('#hardvedio-2 .volumeBar').css('width', percentage+'%');
       video_2[0].volume = percentage / 100;
    });

    var timeFormat = function(seconds){
        var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
        var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
        return m+":"+s;
    };

    $('#hardvedio-2 .volumeBar').on('click', function() {
       //For Webkit
       video_2[0].webkitEnterFullscreen();
     
       //For Firefox
       video_2[0].mozRequestFullScreen();
     
       return false;
    });
})
$(function(){
    
    var ran_3 = document.getElementById('ran-3');

    video_3[0].removeAttribute('controls');
    $('#hardvedio-3 .btnPlay').on('click',function(){
        if(video_3[0].paused){
            video_3[0].play();
        }else{
            video_3[0].pause();
        }
        return false;
    });

    video_3.on('loadedmetadata',function(){
        $('#hardvedio-3 .duration').text(timeFormat(video_3[0].duration));
    });
    video_3.on('timeupdate',function(){
        var currentPos = video_3[0].currentTime;
        var maxduration = video_3[0].duration;
        var percentage = 100 * currentPos / maxduration;
        $('#hardvedio-3 .timeBar').css('width', percentage+'%');
        $('#hardvedio-3 .current').text(timeFormat(currentPos));
    });

    var timeDrag = false;
    $('#hardvedio-3 .progressBar').mousedown(function(e) {
       timeDrag = true;
       updatebar(e.pageX);
    });
    $(document).mouseup(function(e) {
       if(timeDrag) {
          timeDrag = false;
          updatebar(e.pageX);
       }
    });
    $(document).mousemove(function(e) {
       if(timeDrag) {
          updatebar(e.pageX);
       }
    });
     
    //update Progress Bar control
    var updatebar = function(x) {
       var progress = $('#hardvedio-3 .progressBar');
       var maxduration = video_3[0].duration; //Video duraiton
       var position = x - progress.offset().left; //Click pos
       var percentage = 100 * position / progress.width();
     
       //Check within range
       if(percentage > 100) {
          percentage = 100;
       }
       if(percentage < 0) {
          percentage = 0;
       }
     
       //Update progress bar and video currenttime
       $('#hardvedio-3 .timeBar').css('width', percentage+'%');
       $('#hardvedio-3 .timeIcon').css('left', percentage+'%');
       video_3[0].currentTime = maxduration * percentage / 100;
    };

    //Mute/Unmute control clicked
    $('#hardvedio-3 .muted').click(function() {
       video_3[0].muted = !video_3[0].muted;
       return false;
    });
     
    //Volume control clicked
    $('#hardvedio-3 .volumeBar').on('mousedown', function(e) {
       var position = e.pageX - volume.offset().left;
       var percentage = 100 * position / volume.width();
       $('#hardvedio-3 .volumeBar').css('width', percentage+'%');
       video_3[0].volume = percentage / 100;
    });

    var timeFormat = function(seconds){
        var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
        var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
        return m+":"+s;
    };

    $('#hardvedio-3 .volumeBar').on('click', function() {
       //For Webkit
       video_3[0].webkitEnterFullscreen();
     
       //For Firefox
       video_3[0].mozRequestFullScreen();
     
       return false;
    });
})
$(function(){
    
    var ran_4 = document.getElementById('ran-4');

    video_4[0].removeAttribute('controls');
    $('#hardvedio-4 .btnPlay').on('click',function(){
        if(video_4[0].paused){
            video_4[0].play();
        }else{
            video_4[0].pause();
        }
        return false;
    });

    video_4.on('loadedmetadata',function(){
        $('#hardvedio-4 .duration').text(timeFormat(video_4[0].duration));
    });
    video_4.on('timeupdate',function(){
        var currentPos = video_4[0].currentTime;
        var maxduration = video_4[0].duration;
        var percentage = 100 * currentPos / maxduration;
        $('#hardvedio-4 .timeBar').css('width', percentage+'%');
        $('#hardvedio-4 .current').text(timeFormat(currentPos));
    });

    var timeDrag = false;
    $('#hardvedio-4 .progressBar').mousedown(function(e) {
       timeDrag = true;
       updatebar(e.pageX);
    });
    $(document).mouseup(function(e) {
       if(timeDrag) {
          timeDrag = false;
          updatebar(e.pageX);
       }
    });
    $(document).mousemove(function(e) {
       if(timeDrag) {
          updatebar(e.pageX);
       }
    });
     
    //update Progress Bar control
    var updatebar = function(x) {
       var progress = $('#hardvedio-4 .progressBar');
       var maxduration = video_4[0].duration; //Video duraiton
       var position = x - progress.offset().left; //Click pos
       var percentage = 100 * position / progress.width();
     
       //Check within range
       if(percentage > 100) {
          percentage = 100;
       }
       if(percentage < 0) {
          percentage = 0;
       }
     
       //Update progress bar and video currenttime
       $('#hardvedio-4 .timeBar').css('width', percentage+'%');
       $('#hardvedio-4 .timeIcon').css('left', percentage+'%');
       video_4[0].currentTime = maxduration * percentage / 100;
    };

    //Mute/Unmute control clicked
    $('#hardvedio-4 .muted').click(function() {
       video_4[0].muted = !video_4[0].muted;
       return false;
    });
     
    //Volume control clicked
    $('#hardvedio-4 .volumeBar').on('mousedown', function(e) {
       var position = e.pageX - volume.offset().left;
       var percentage = 100 * position / volume.width();
       $('#hardvedio-4 .volumeBar').css('width', percentage+'%');
       video_4[0].volume = percentage / 100;
    });

    var timeFormat = function(seconds){
        var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
        var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
        return m+":"+s;
    };

    $('#hardvedio-4 .volumeBar').on('click', function() {
       //For Webkit
       video_4[0].webkitEnterFullscreen();
     
       //For Firefox
       video_4[0].mozRequestFullScreen();
     
       return false;
    });
})

var vc = document.getElementById('myVideo');
var ran = document.getElementById('ran')

function setvalue(){  
    vc.volume=ran.value/100;  
    vc.muted=false;  
}; 
var vc_2 = document.getElementById('myVideo-2');
var ran_2 = document.getElementById('ran-2')

function setvalue(){  
    vc_2.volume=ran_2.value/100;  
    vc_2.muted=false;  
}; 
var vc_3 = document.getElementById('myVideo-3');
var ran_3 = document.getElementById('ran-3')

function setvalue(){  
    vc_3.volume=ran_3.value/100;  
    vc_3.muted=false;  
}; 
var vc_4 = document.getElementById('myVideo-4');
var ran_4 = document.getElementById('ran-4')

function setvalue(){  
    vc_4.volume=ran_4.value/100;  
    vc_4.muted=false;  
}; 


$(function(){
    $('.hardvideo-box li').click(function(){
        $('.hardvideo-box').find(".hardshow").eq($(this).index()).animate({'opacity':'1','top':'100px'},400);
    });
    $('.hardshow .hardv-heard i').click(function(){
        $('.hardvideo-box').find(".hardshow").animate({'opacity':'0','top':'-660px'},400);
        video[0].pause();
        video_2[0].pause();
        video_3[0].pause();
        video_4[0].pause();
    })
})
    
