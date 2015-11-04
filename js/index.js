var wheel = false;
var docH;
var scrollTop;
var scrollElement;

$(document).ready(function(){
  // Parallax
  $(document).mousemove(function(e){
    parallax(e);
   });

  // Page transitions
  $(".btn").click(function(e){
  	transition($(this).attr("href"));
  });

  $( window ).on("hashchange", function() {
  	$('video').get(0).pause();
  	transition(window.location.hash);
  });

  // Smooth scroll
  page = $("body");
  scrollElement = $('WebkitAppearance' in document.documentElement.style ? "body" : "html");

  $scrollTop = $(window).scrollTop();

  $(window).on('scroll', function() {
      if (wheel === false) {
          $scrollTop = $(this).scrollTop();
      }
  });

  $(document).on('DOMMouseScroll mousewheel', function(e, delta) {
      delta = delta || -e.originalEvent.detail || e.originalEvent.wheelDelta;
      delta = delta > 0 ? 1 : -1;
      wheel = true;
      var docH = $(document).height() - $(window).height();

      $scrollTop = Math.min(docH, Math.max(0, parseInt($scrollTop - delta * 300)));
      scrollElement.stop(true, false).animate({
          scrollTop: $scrollTop + 'px'
      }, 500, 'easeOutCubic', function() {
          wheel = false;
      });
      return false;
  });

  $("#gameplayVideo").on("click", function(e){
    // From: http://stackoverflow.com/questions/5278262/click-the-poster-image-the-html5-video-plays
    
    // get click position 
        var clickY = (e.pageY - $(this).offset().top);
        var height = parseFloat( $(this).height() );

        // avoids interference with controls
        if(clickY > 0.82*height) return;

        // toggles play / pause
        this.paused ? this.play() : this.pause();

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