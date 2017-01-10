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
	var newSticky = $('#sticky-template').clone();
	newSticky.removeAttr('id');
  
  // remove color picker from the clone
  var newStickyCP = newSticky.find("#colorPicker")
  newStickyCP.remove();

  // remove cloning image from clones
  var newStickyCB = newSticky.find("#clone-button")
  newStickyCB.remove();

	newSticky.appendTo($('#sticky-generator'))
	newSticky.draggable();

	// $('#sticky-text').val('')
})

$("#colorPicker").change(function(){
  // console.log("colorPicker");
  let stickyColor = $("#colorPicker").val();
  console.log(stickyColor);
  $("#sticky-template").css("background-color", stickyColor)
});

// get the value of the input and populate the brainstorm board with that many divs when the "let's go" button is clicked
$("#submit").click(function() {
    var value = $("#number-of-lessons").val();
    $( "p" ).text( value );
    console.log(value)
    var lessonNumber = 1;
    for (i = value; i > 0; i--) {
    	console.log(i)
    	$('#brainstorm-board').append('<div class="lesson"> <h2> # ' + lessonNumber + '</h2> </div>');
      lessonNumber++;
    }

    // var bbHeight = $("#sticky-generator").height();
    // var margin = 20;
    // var bbWidth = $("#sticky-generator").width();
    // console.log("sticky-generator width = " + bbWidth)
    // var lessonHeight = bbHeight - margin;
    // var lessonWidth = $(".lesson").width();
    // var numRows = Math.ceil(value / 5);
    // console.log("numRows" + numRows)
    // if (value > 5) {
    //   lessonHeight = bbHeight / numRows - 20;
    //   console.log("lesson height = " + lessonHeight)
    // }
    // $(".lesson").height(lessonHeight);
    // $(".lesson").width(lessonWidth);
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


