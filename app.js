$(document).ready(function(e) {
	$('.nav-toggle').click(function(e) {
  
  	e.preventDefault();
  	$("html").toggleClass("openNav");
  	$(".nav-toggle").toggleClass("active");

});
	$("#welcomeHeader").addClass('animated fadeIn');
	$("#welcomeSubHeader").addClass('animated fadeIn');

})