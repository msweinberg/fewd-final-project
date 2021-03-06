
// MEDIA QUERY function:
$(document).ready(function() {
    // run test on initial page load
    
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
// });
checkSize();
//Function to the css rule
$("#howmany").hide();

function checkSize(){
    if ($(".sampleClass").css("float") === "none" ){
      console.log('fired')
        // your code here
        $("#planner").click(function(e){
          e.preventDefault();
          $("#planner").hide();
          $("#howmany").show();

        })
    } else {
      $( "#planner" ).click(function(e){
        e.preventDefault();
        $( "#planner" ).animate({ left: "50px" });
        console.log("clicked");
        $("#howmany").show();
      });
    }
}
// END MEDIA QUERY

// $("#howmany").hide();

//   $( "#planner" ).click(function(e){
//     e.preventDefault();

//    $( "#planner" ).animate({ left: "175px" });
//    console.log("clicked");
//    $("#howmany").show();
//    // $("#howmany").toggle("slide");
//    // $("#howmany").toggle("clip");
//   });


// When you click a sticky it clones
// When a sticky is cloned it is appended to the "sticky-generator"
// The sticky becomes draggable and can be moved onto the "brainstorm-board"

function populate(){
  $('<p></p>').appendTo($('#sticky-generator'))
  var newSticky = $('#sticky-template').clone();
  newSticky.removeAttr('id');
  newSticky.attr("contenteditable", "true");
  
  // remove color picker from the clone
  var newStickyCP = newSticky.find("#colorPicker")
  newStickyCP.remove();

  // remove cloning image from clones
  var newStickyCB = newSticky.find("#clone-button")
  newStickyCB.remove();

  newSticky.appendTo($('#sticky-generator'))
  newSticky.draggable();
  newSticky.click(function() {
    $(this).draggable({ disabled: false });
    }).dblclick(function() {
    $(this).draggable({ disabled: true });
  });
}

$('#clone-button').click(populate);
	// $('<p></p>').appendTo($('#sticky-generator'))
	// var newSticky = $('#sticky-template').clone();
	// newSticky.removeAttr('id');
 //  newSticky.attr("contenteditable", "true");
  
 //  // remove color picker from the clone
 //  var newStickyCP = newSticky.find("#colorPicker")
 //  newStickyCP.remove();

 //  // remove cloning image from clones
 //  var newStickyCB = newSticky.find("#clone-button")
 //  newStickyCB.remove();

	// newSticky.appendTo($('#sticky-generator'))
 //  newSticky.draggable();
	// newSticky.click(function() {
 //    $(this).draggable({ disabled: false });
 //    }).dblclick(function() {
 //    $(this).draggable({ disabled: true });
 //  });

// })

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
    	$('#brainstorm-board').append('<div class="lesson" contenteditable="true"> <h2> # ' + lessonNumber + '</h2> </div>');
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

// The event listener for the file upload
// From https://cmatskas.com/importing-csv-files-using-jquery-and-html5/
    document.getElementById('txtFileUpload').addEventListener('change', upload, false);

    // Method that checks that the browser supports the HTML5 File API
    function browserSupportFileUpload() {
        var isCompatible = false;
        if (window.File && window.FileReader && window.FileList && window.Blob) {
        isCompatible = true;
        }
        return isCompatible;
    }

    // Method that reads and processes the selected file
    function upload(evt) {
    if (!browserSupportFileUpload()) {
        alert('The File APIs are not fully supported in this browser!');
        } else {
            var data = null;
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function(event) {
                var csvData = event.target.result;
                data = $.csv.toArrays(csvData);
                if (data && data.length > 0) {
                  alert('Imported -' + data.length + '- rows successfully!');
                  console.log("imported")
                } else {
                    alert('No data to import!');
                }
            };
            reader.onerror = function() {
                alert('Unable to read ' + file.fileName);
            };
        }
    }
})


