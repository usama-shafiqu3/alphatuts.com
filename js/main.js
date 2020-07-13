/* function for transparent navbar and scrolling to change color */

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 200) {
	    $(".fixed-top").css("background" , "white");

	    

	  }

	  else{
		  $(".fixed-top").css("background" , "transparent");

	  }
  })
})

/* function to change nav link color on hover

$(document).ready(function(){
  $("#m-item").hover(function(){
    $(this).css("color", "black");
    }, function(){
    $(this).css("color", "white");
  });
});

 */ 
 $(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 200) {
	    $(".nav-link").css("color" , "black");

	    

	  }

	  else{
		  $(".nav-link").css("color" , "white");

	  }
  })
})
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 200) {
	    $("#m-item-c").css("color" , "#1658a7");

	    

	  }

	  else{
		  $("#m-item-c").css("color" , "#1658a7");

	  }
  })
})
/* back to top button js */
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
