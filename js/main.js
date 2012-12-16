	  String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) { 
    return typeof args[number] != 'undefined'
      ? args[number]
      : match
    ;
  });
};
$(document).ready(function() {
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=astronomy&jsoncallback=?", function(data){for(var i in data.items) {
	$("#myCarousel .carousel-inner").prepend('<div class="item{0}"><img class="img-polaroid" style="box-shadow:0 0 10px #000" src="{1}" /></div>'.format((i == 0? " active" : ""), data.items[i].media.m.replace('_m','')));
	//$("#myCarousel .carousel-inner .item").first().addClass("active"); activates after page loads, no bueno
	
	}});
	var $win = $(window);
	var visible = true;
	processScroll()
    $win.on('scroll', processScroll);
	$('#dismiss').on('click',function(e) {e.preventDefault(); $('.fixed-footer').fadeOut(200,function() {$(this).css({"visibility":"hidden"});});});
	var height = $(document).height() / 2;
    function processScroll() {
      var i, scrollTop = $(window).scrollTop()
      if (scrollTop >= height && visible) {
			$('.fixed-footer').fadeOut();
			visible = false;
	  } else {
	  if(scrollTop < height && !visible) {
		  $('.fixed-footer').fadeIn();
		  visible = true;
	  }
	  }
    }
         	$('blockquote').quovolver();
         	$('#calendar').fullCalendar({
         contentHeight:600,
         eventBackgroundColor:"#880000",
         eventBorderColor:"#880000",
         		events: {
                    		url: 'https://www.google.com/calendar/feeds/0d43qb2uu4qv0gvtidv7g2revo%40group.calendar.google.com/public/basic',
                   		editable:false
               	 		},
         		
         		eventClick: function(event) {
         			// opens events in a popup window
         			window.open(event.url, 'gcalevent', 'width=700,height=600');
         			return false;
         		},
         		
         		loading: function(bool) {
         			if (bool) {
         				$('#loading').show();
         			}else{
         				$('#loading').hide();
         			}
         		},
         		editable: true
         		
         	});
         	
         });