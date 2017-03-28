//banner
$(function(){
	var adTimer;
	var num=1;
	$("#dot li").click(function(){
        num=$("#dot li").index(this)+1;
        showImg(num);
   })
	
   $(".pic").hover(function(){
   	    clearInterval(adTimer);
   },function(){
    	adTimer=window.setInterval(function(){
            showImg(num);
            num++;
            if(num==6){
            	num=1;
            }
    	},2000)
   }).trigger("mouseleave")
   function showImg(num){
		 var img_src=$("#show li img").attr("src");
		 var i=img_src.lastIndexOf(".");
		 var unit=img_src.substring(i);
         img_src=img_src.substring(0,i-1);
         $("#show li img").attr("src",img_src+num+unit); 
         $("#dot li").eq(num-1).addClass("round").siblings().removeClass("round");
	}
   
//give a wishes
  $(".circle").hover(function(){
  	 $(".circle").removeClass("ti")
  	 $(this).addClass("ti");
  })

  //紫色优雅
  $(".ul_pure li").hover(function(){
  	  $(this).find(".n1 i").addClass("bounceInDown");
  },function(){
  	  $(this).find(".n1 i").removeClass("bounceInDown");
  })
  //白色纯洁
  $(".ul_white li").hover(function(){
  	  $(this).find(".n1 i").addClass("bounceInLeft");
  },function(){
  	  $(this).find(".n1 i").removeClass("bounceInLeft");
  })
  
   $(".demo1 li").hover(function(){
  	  $(this).find(".n1 i").addClass("wobble");
  },function(){
  	  $(this).find(".n1 i").removeClass("wobble");
  })
    $(".demo2 li").hover(function(){
  	  $(this).find(".n1 i").addClass("wobble");
  },function(){
  	  $(this).find(".n1 i").removeClass("wobble");
  })
 //红色喜庆
  $(".nemo1 li").hover(function(){
  	  $(this).find(".n1 i").addClass("bounceInLeft");
  },function(){
  	  $(this).find(".n1 i").removeClass("bounceInLeft");
  })
  //我是男主
   $(".memo1 li").hover(function(){
  	  $(this).find(".n1 i").addClass("wobble");
  },function(){
  	  $(this).find(".n1 i").removeClass("wobble");
  })
    $(".memo2 li").hover(function(){
  	  $(this).find(".n1 i").addClass("wobble");
  },function(){
  	  $(this).find(".n1 i").removeClass("wobble");
  })
//点击事件--页面随处点击出现Love  
    $("body").bind("click", function(e) { //直接给body一个事件好了. 
        var $i = $("<b>").text("Love"); //添加到页面的元素 
        var x = e.pageX,
        y = e.pageY; //鼠标点击的位置 
        $i.css({
            "z-index": 99999,
            "top": y - 15,
            "left": x,
            "position": "absolute",
            "color": "red",
            "font-size":"30px",
            "font-family":"kaiti"
        });
        $("body").append($i);
          $i.animate({
		  "top": y - 180,
		  "opacity": 0
		  },1500,function() {
		       $i.remove();
            }
          );
          e.stopPropagation();
        });




//线条显示
	$(".demo1 li").hover(function(){
        $(this).find(".line_top").animate({
        	width:"300px"
        },1000)
         $(this).find(".line_bottom").animate({
        	width:"300px"
        },1000)
        $(this).find(".line_left").animate({
        	height:"200px"
        },1000)
        $(this).find(".line_right").animate({
        	height:"200px"
        },1000)
	},function(){
		 $(".demo1 li").find(".line_top").animate({
        	width:"0px"
        },500)
         $(".demo1 li").find(".line_bottom").animate({
        	width:"0px"
        },500)
        $(".demo1 li").find(".line_left").animate({
        	height:"0px"
        },500)
        $(".demo1 li").find(".line_right").animate({
        	height:"0px"
        },500)
      })
    $(".demo2 li").hover(function(){
        $(this).find(".line_top").animate({
        	width:"300px"
        },1000)
         $(this).find(".line_bottom").animate({
        	width:"300px"
        },1000)
        $(this).find(".line_left").animate({
        	height:"200px"
        },1000)
        $(this).find(".line_right").animate({
        	height:"200px"
        },1000)
	},function(){
		 $(".demo2 li").find(".line_top").animate({
        	width:"0px"
        },500)
         $(".demo2 li").find(".line_bottom").animate({
        	width:"0px"
        },500)
        $(".demo2 li").find(".line_left").animate({
        	height:"0px"
        },500)
        $(".demo2 li").find(".line_right").animate({
        	height:"0px"
        },500)
      })
    
 //红色喜庆banner
 	var timer;
	var num1=1;
	$("#dot1 li").click(function(){
        num1=$("#dot1 li").index(this)+1;
        showPic(num1);
   })
	
   $(".pic1").hover(function(){
   	    clearInterval(timer);
   },function(){
    	timer=window.setInterval(function(){
            showPic(num);
            num1++;
            if(num1==5){
            	num1=1;
            }
    	},2000)
   }).trigger("mouseleave")
   function showPic(num){
		 var img_src=$("#show1 li img").attr("src");
		 var i=img_src.lastIndexOf(".");
//		 alert(i);
		 var unit=img_src.substring(i);
//		 alert(unit)
         img_src=img_src.substring(0,i-1);
//       alert(img_src)
//       alert(img_src+num+unit)
         $("#show1 li img").attr("src",img_src+num1+unit); 
         $("#dot1 li").eq(num1-1).addClass("round").siblings().removeClass("round");
	}
//  图片列表的展示与隐藏
    $(".song").click(function(){
    	var $div = $(this).siblings();
    	 if($div.is(':hidden')){
    	 	$div.show();
    	 }
    	 else{
    	 	$div.hide();
    	 }
    	 
    })
})
