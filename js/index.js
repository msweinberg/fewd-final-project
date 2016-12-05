$(document).ready(function(){

$("#howmany").hide();

	$( "#planner" ).click(function(){
 	 $( "#planner" ).animate({ left: "175px" });
 	 console.log("clicked");
 	 $("#howmany").show();
 	 // $("#howmany").toggle("slide");
 	 // $("#howmany").toggle("clip");
 	});


})