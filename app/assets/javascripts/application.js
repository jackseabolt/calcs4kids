// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .






function parallex () {
	var ypos = window.pageYOffset; 
	var	image = document.getElementById('section_1'); 
	image.style.top = ypos * -.2 + "px"; 

	if (ypos > 1000){
		image = document.getElementById('section_1'); 
		image.style.display = "none"; 
		}
	else if (ypos <1000) {
		image.style.display = "block";
	}
}
	
window.addEventListener('scroll', parallex);


$(document).on('turbolinks:load', function(){
	function note () {
		pos = window.pageYOffset;
		if (pos > 300) {
			$('#note').animate({opacity: '1'}, 1000);
		} 
	}
	window.addEventListener('scroll', note);



	function note_title () {
		pos = window.pageYOffset;
		if (pos > 300) {
			$('#note_title').animate({opacity: '1'}, 1000);
		} 
	}
	window.addEventListener('scroll', note_title);
});
