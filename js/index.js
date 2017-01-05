$(document).ready(function(){


$("#howmany").hide();

	$( "#planner" ).click(function(e){
		e.preventDefault();
		// debugger;
 	 $( "#planner" ).animate({ left: "175px" });
 	 console.log("clicked");
 	 $("#howmany").show();
 	 // $("#howmany").toggle("slide");
 	 // $("#howmany").toggle("clip");
 	});

// Makes that sticky draggable
// $( init );
//  function init() {
//   $('.sticky-template').draggable();
// }

// When you click a sticky it clones
// When a sticky is cloned it is appended to the "sticky-generator"
// The sticky becomes draggable and can be moved onto the "brainstorm-board"
$('#clone-button').click(function(){
	$('<p></p>').appendTo($('#sticky-generator'))
	var newSticky = $('.sticky-template').last().clone();
	newSticky.appendTo($('#sticky-generator'))
	newSticky.draggable();

	// $('#sticky-text').val('')
})

// get the value of the input and populate the brainstorm board with that many divs
$("#number-of-lessons").keyup(function() {
    var value = $( this ).val();
    $( "p" ).text( value );
    console.log(value)
    for (i = value; i > 0; i--) {
    	console.log(i)
    	$('#brainstorm-board').append('<div class="lesson"></div>')
    }
  })


// Smooth Scrolling from https://css-tricks.com/snippets/jquery/smooth-scrolling/ 
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

})


