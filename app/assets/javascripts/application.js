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


function drop() {
	    $('html,body').animate({
	        scrollTop: $(".section_5").offset().top},
	        'slow'); 
	}

function parallex () {
	var ypos = window.pageYOffset; 
	var	image = document.getElementById('section_1'); 
	image.style.top = ypos * -.2 + "px"; 
	// image.style.marginTop = (700 - (ypos * .2)) + "px"; 
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


	function left() {
		pos = window.pageYOffset; 
		if (pos > 700) {
			$('.left').animate({left: '0px'}, 1200);
		}
	}
	window.addEventListener('scroll', left);

	function right() {
		pos = window.pageYOffset; 
		if (pos > 1400) {
			$('.right').animate({right: '0px'}, 1200);
		}
	}
	window.addEventListener('scroll', right);


	

// social media links

	$('#facebook').hover(
	    function(){
	        $(this).animate({'backgroundColor': '#404a87'},400);
	    },
	    function(){
	        $(this).animate({'backgroundColor': '#9a9999'},400);
	    }
	);
	$('#twitter').hover(
	    function(){
	        $(this).animate({'backgroundColor': '#6bb2d0'},400);
	    },
	    function(){
	        $(this).animate({'backgroundColor': '#9a9999'},400);
	    }
	);
	$('#google').hover(
	    function(){
	        $(this).animate({'backgroundColor': '#cb3939'},400);
	    },
	    function(){
	        $(this).animate({'backgroundColor': '#9a9999'},400);
	    }
	);
	$('#pinterest').hover(
	    function(){
	        $(this).animate({'backgroundColor': '#cb3939'},400);
	    },
	    function(){
	        $(this).animate({'backgroundColor': '#9a9999'},400);
	    }
	);

});	
	
