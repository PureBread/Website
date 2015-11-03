/*-----------------------------------------------------------------------
=PARALAX city
-----------------------------------------------------------------------*/
$(document).ready(function(){
  $(document).mousemove(function(e){
    var xMouse = e.pageX;
    var xCenter = $(window).width()/2;
    var offset = xMouse - xCenter;
    $("#parallax").css({"background-position-x": -offset*0.03 + "px," +  -offset*0.02 + "px," + -offset*0.01 + "px" });//foreground
   });


  $(".btn").click(function(e){
  	transition($(this).attr("href"));
  });

  $( window ).on("hashchange", function() {
  	transition(window.location.hash);
  });

});

function transition(hash){
	$(".page, .anchor").removeClass("active");
	$(hash + ", " + hash + "-content").addClass("active");
  	$(window).scrollTop();
}