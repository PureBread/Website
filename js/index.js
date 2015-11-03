/*-----------------------------------------------------------------------
=PARALAX city
-----------------------------------------------------------------------*/
$(document).ready(function(){
  $(document).mousemove(function(e){
    parallax(e);
   });

  $(".btn").click(function(e){
  	transition($(this).attr("href"));
  });

  $( window ).on("hashchange", function() {
  	$('video').get(0).pause();
  	transition(window.location.hash);
  });

});

function parallax(e){
	var xMouse = e.pageX;
    var yMouse = e.pageY;
    var xCenter = $(window).width()/2;
    var yCenter = $(window).height()/2;
    var offsetH = (xMouse - xCenter) * 4;
    var offsetV = (yMouse - yCenter) * 4;
    $("#parallax").css({"background-position-x": -offsetH*0.04 + "px," +  -offsetH*0.02 + "px," + -offsetH*0.01 + "px" });//foreground
    $("#parallax").css({"background-position-y": -offsetV*0.04 + "px," +  -offsetV*0.02 + "px," + -offsetV*0.01 + "px" });
}

function transition(hash){
  if($(hash)){
  	$(".page, .anchor").removeClass("active");
  	$(hash + ", " + hash + "-content").addClass("active");
    $(window).scrollTop();
  }
}